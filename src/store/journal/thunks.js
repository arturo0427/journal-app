import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNote,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
} from "./";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(savingNewNote());

    const newNote = {
      title: "",
      body: "",
      imageUrls:[],
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El uid del usuario no existe");

    const notes = await loadNotes(uid);
    dispatch(setNote(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(updateNote(note));
  };
};

export const startLoadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

    const fileUploadPromise = [];

    for (const file of files) {
      fileUploadPromise.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromise);

    dispatch(setPhotosToActiveNote(photosUrls));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note.id));
  };
};
