import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import OlvidoDatos from './pages/olvideMisDatos';
import ForgotPassword from './pages/forgotPassword';
import ConfirmEmailMessage from './components/verificationComponents/ConfirmEmailMessage';
import SuccessChangePassword from './components/verificationComponents/SuccessChangePassword';
import ConfirmAccountSuccess from './components/verificationComponents/ConfirmAccountSuccess';
import ChangePassword from './pages/changePassword';
import WrongDataSession from './components/verificationComponents/WrongDataSession';
import RegisterInformation from './components/completeDataSpotsComponents/RegisterInformation';
import CompleteData from './pages/completeDataUserFirstLogin';
import RepresentanteDeportivo from './pages/representanteDeportivo';
import ReporteAtletasPorDisciplinas from './pages/reporteAtletasPorDisciplinas';
import SeccionDeNotificacion from './pages/seccionDeNotificacion';
import ReporteIndumentariaAtletas from './pages/reporteIndumentariaAtletas';
import AtletasConDatosPorConfirmarPorSuRepresentanteReportivo from './pages/atletasConDatosPorConfirmarPorSuRepresentanteDeportivo';
import EstatusDeVigenciaPasaportesAtletas from './pages/estatusDeVigenciaPasaportesAtletas';
import EstatusDeVigenciaPasaportesDisciplina from './pages/estatusDeVigenciaPasaportesDisciplina';
import RequerimientoReporteAtletasRangoEdades from './pages/requerimientoReporteAtletasRangoEdades';
import ReporteAtletasVacunadosCovid19PorAtleta from './pages/reporteAtletasVacunadosCovid19PorAtleta';
import ReporteAtletasVacunadosCovid19PorDisciplina from './pages/reporteAtletasVacunadosCovid19PorDisciplina';
import Error404 from './pages/error404';
// private route
import RequireLogin from './pages/privateRoutes/RequireLogin';
import { DisiplinasPrincipales } from './pages/DisiplinasPrincipales';
import { NoticiasDeportivas } from './pages/NoticiasDeportivas';
import { DatosPersonales } from './pages/DatosPersonales';
import { Caracteristicas } from './pages/Caracteristicas';
import { Reportes } from './pages/Reportes';
import { ReporteAtletasDisciplinas } from './pages/reportes/forms/ReporteAtletasDisciplinas';
import { ReporteAtletasDisciplinasInfo } from './pages/reportes/info/ReporteAtletasDisciplinasInfo';
import { AsignacionDeAtletas } from './pages/AsignacionDeAtletas';
import { ReporteAtletaEdades } from './pages/reportes/forms/ReporteAtletaEdades';
import { ReporteAtletasEdadesInfo } from './pages/reportes/info/ReporteAtletasEdadesInfo';
import { ReporteAtletaPasaporteEstatus } from './pages/reportes/forms/ReporteAtletaPasaporteEstatus';
import { ReporteAtletaPasaporteEstatusInfo } from './pages/reportes/info/ReporteAtletaPasaporteEstatusInfo';
import { ReporteAtletaPasaporteEstatusAtletaInfo } from './pages/reportes/info/ReporteAtletaPasaporteEstatusAtletaInfo';
import { ReporteAtletaPorConfirmar } from './pages/reportes/info/ReporteAtletaPorConfirmar';
import { ReporteAtletasIndumentaria } from './pages/reportes/forms/ReporteAtletasIndumentaria';
import { ReporteAtletasIndumentariaInfo } from './pages/reportes/info/ReporteAtletasIndumentariaInfo';
import { ReporteAtletaVacunados } from './pages/reportes/forms/ReporteAtletaVacunados';
import { ReporteAtletaVacunadosInfo } from './pages/reportes/info/ReporteAtletaVacunadosInfo';
import { ReporteAtletaVacunadosDisciplinaInfo } from './pages/reportes/info/ReporteAtletaVacunadosDisciplinaInfo';
import { ReporteRepresentanteDisciplina } from './pages/reportes/forms/ReporteRepresentanteDisciplina';
import { ReporteRepresentanteDisciplinaInfo } from './pages/reportes/info/ReporteRepresentanteDisciplinaInfo';
import { ReporteAtletasPorRepresentante } from './pages/reportes/forms/ReporteAtletasPorRepresentante';
import { ReporteAtletasPorRepresentanteInfo } from './pages/reportes/info/ReporteAtletasPorRepresentanteInfo';
import { ReporteAtletasPorGenero } from './pages/reportes/forms/ReporteAtletasPorGenero';
import { ReporteAtletasPorGeneroInfo } from './pages/reportes/info/ReporteAtletasPorGeneroInfo';
import { RegisterSuccess } from './pages/messages/public/RegisterSuccess';
import ValidarUsuarioSms from './pages/ValidarUsuarioSms';
import { HomeReestructura } from './pages/HomeReestructura';
import { Consultas } from './pages/Consultas';
import { Notifications } from './pages/Notifications';
import { ProfileEdit } from './pages/ProfileEdit';
import { Eventos } from './pages/Eventos';
import { CountAtletas } from './pages/eventos/CountAtletas';
import { CedulaAtletasEvent } from './pages/eventos/CedulaAtletasEvent';
import { StepsEventCreate } from './pages/eventos/StepsEventCreate';
import { InfoEvemt } from './pages/eventos/InfoEvemt';
import { ReporteEventos } from './pages/reportes/forms/ReporteEventos';
import { ReporteEventosInfo } from './pages/reportes/info/ReporteEventosInfo';
import { ChangePasswordUserLog } from './pages/ChangePasswordUserLog';
import { AdminValid } from './validations/AdminValid';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);
  // console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeReestructura />} />

        <Route
          path="/home-re"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/registro-exitoso" element={<RegisterSuccess />} />

        <Route path="/olvidoDatos" element={<OlvidoDatos />} />

        <Route path="/forgatPassword" element={<ForgotPassword />} />

        <Route path="/changePassword" element={<ChangePassword />} />

        

        <Route
          path="/successChangePassword"
          element={<SuccessChangePassword />}
        />

        <Route
          path="/confirmAccountSuccess"
          element={<ConfirmAccountSuccess />}
        />

        <Route path="/wrongdata" element={<WrongDataSession />} />

        <Route path="/registerInformation" element={<RegisterInformation />} />

        <Route
          path="/representanteDeportivo"
          element={<RepresentanteDeportivo />}
        />

        <Route
          path="/reporteAtletasPorDisciplinas"
          element={<ReporteAtletasPorDisciplinas />}
        />

        <Route
          path="/reporteIndumentariaAtletas"
          element={<ReporteIndumentariaAtletas />}
        />

        <Route
          path="/seccionDeNotificacion"
          element={<SeccionDeNotificacion />}
        />

        <Route
          path="/atletasConDatosPorConfirmarPorSuRepresentanteReportivo"
          element={<AtletasConDatosPorConfirmarPorSuRepresentanteReportivo />}
        />

        <Route
          path="/estatusDeVigenciaPasaportesAtletas"
          element={<EstatusDeVigenciaPasaportesAtletas />}
        />

        <Route
          path="/estatusDeVigenciaPasaportesDisciplina"
          element={<EstatusDeVigenciaPasaportesDisciplina />}
        />

        <Route
          path="/requerimientoReporteAtletasRangoEdades"
          element={<RequerimientoReporteAtletasRangoEdades />}
        />

        <Route
          path="/reporteAtletasVacunadosCovid19PorAtleta"
          element={<ReporteAtletasVacunadosCovid19PorAtleta />}
        />

        <Route
          path="/reporteAtletasVacunadosCovid19PorDisciplina"
          element={<ReporteAtletasVacunadosCovid19PorDisciplina />}
        />

        <Route path="/validar-usuario-sms" element={<ValidarUsuarioSms />} />

        <Route path="/confirmar-email" element={<ConfirmEmailMessage />} />
        {/* <Route path="/validar-usuario-email" element={<h1>Por hacer</h1>} /> */}
        {/* <Route path="/validar-usuario-email" element={<h1>Por hacer</h1>} /> */}

        {/* Admin route */}
        <Route
          element={
            <AdminValid redirectTo="/login" isAllowed={user.token || null} />
          }
        >
          <Route path="/completeData" element={<CompleteData />} />
          <Route path="/dashboard" element={<DisiplinasPrincipales />} />
          <Route path="/noticias-deportivas" element={<NoticiasDeportivas />} />
          <Route path="/datos-deportivos" element={<DatosPersonales />} />
          <Route path="/caracteristcas" element={<Caracteristicas />} />
          <Route path="/reportes" element={<Reportes />} />
          {/* * reporte formulario */}
          <Route
            path="/reportes/reporte-atletas-por-disciplinas"
            element={<ReporteAtletasDisciplinas />}
          />
          <Route
            path="/reportes/reporte-atletas-por-edades"
            element={<ReporteAtletaEdades />}
          />
          <Route
            path="/reportes/reporte-atletas-estatus-pasaporte"
            element={<ReporteAtletaPasaporteEstatus />}
          />
          <Route
            path="/reportes/reporte-atletas-indumentaria"
            element={<ReporteAtletasIndumentaria />}
          />
          <Route
            path="/reportes/reporte-atletas-vacunados"
            element={<ReporteAtletaVacunados />}
          />
          <Route
            path="/reportes/reporte-representante-disciplina"
            element={<ReporteRepresentanteDisciplina />}
          />
          <Route
            path="/reportes/atletas-por-representantes-deportivos"
            element={<ReporteAtletasPorRepresentante />}
          />
          <Route
            path="/reportes/atletas-por-genero"
            element={<ReporteAtletasPorGenero />}
          />
          <Route path="/reportes/eventos" element={<ReporteEventos />} />

          {/* reporte info */}
          <Route
            path="/reportes/reporte-atletas-por-disciplinas/info"
            element={<ReporteAtletasDisciplinasInfo />}
          />
          <Route
            path="/reportes/reporte-atletas-por-edades/info"
            element={<ReporteAtletasEdadesInfo />}
          />
          <Route
            path="/reportes/reporte-atletas-estatus-pasaporte/info"
            element={<ReporteAtletaPasaporteEstatusInfo />}
          />
          <Route
            path="/reportes/reporte-disiplina-estatus-pasaporte/info"
            element={<ReporteAtletaPasaporteEstatusAtletaInfo />}
          />
          <Route
            path="/reportes/reporte-atletas-por-confirmar/info"
            element={<ReporteAtletaPorConfirmar />}
          />
          <Route
            path="/reportes/reporte-atletas-indumentaria/info"
            element={<ReporteAtletasIndumentariaInfo />}
          />
          <Route
            path="/reportes/reporte-atletas-vacunados/info"
            element={<ReporteAtletaVacunadosInfo />}
          />
          <Route
            path="/reportes/reporte-atletas-disciplina-vacunados/info"
            element={<ReporteAtletaVacunadosDisciplinaInfo />}
          />
          <Route
            path="/reportes/reporte-representante-disciplina/info"
            element={<ReporteRepresentanteDisciplinaInfo />}
          />
          <Route
            path="/reportes/atletas-por-representantes-deportivos/info"
            element={<ReporteAtletasPorRepresentanteInfo />}
          />
          <Route
            path="/reportes/atletas-por-genero/info"
            element={<ReporteAtletasPorGeneroInfo />}
          />
          <Route
            path="/reportes/eventos/info"
            element={<ReporteEventosInfo />}
          />

          <Route
            path="/asignacion-de-atletas"
            element={<AsignacionDeAtletas />}
          />

          <Route path="/consultas" element={<Consultas />} />
          <Route path="/notificaciones" element={<Notifications />} />

          {/* * configuración */}
          <Route
            path="/configuracion/editar-perfil"
            element={<ProfileEdit />}
          />
          <Route
            path="/configuracion/cambio-de-contraseña"
            element={<ChangePasswordUserLog />}
          />

          {/* * Eventos */}
          <Route path="/eventos" element={<Eventos />} />
          <Route
            path="/eventos/cantidad-de-atletas"
            element={<CountAtletas />}
          />
          <Route
            path="/eventos/cedula-de-atletas"
            element={<StepsEventCreate />}
          />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

//<Navigate to="/dashboard" replace={true} />

export default App;
