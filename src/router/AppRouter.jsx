import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"


export const AppRouter = () => {
    return (
        <Routes>
            {/* Ruta de login y registro */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Ruta de JournalApp o la aplicacion en si */}
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>
    )
}
