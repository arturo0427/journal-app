import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";


export const AppRouter = () => {

    const { status } = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path="/*" element={<JournalRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path="/*" element={<Navigate to={'/auth/login'} />} />

            {/* // Ruta de login y registro */}
            {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}


            {/* Ruta de JournalApp o la aplicacion en si */}
            {/* <Route path="/*" element={<JournalRoutes />} /> */}
        </Routes>
    )
}
