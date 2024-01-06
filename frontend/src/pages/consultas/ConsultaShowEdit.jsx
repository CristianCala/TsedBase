import React, { useState } from "react";
import { GraySection } from "../../components/admin/parent/GraySection";
import { ContainerForm } from "../../components/parents/ContainerForm";
import formSchemaDataPersonal, {
  formSchemaCaracteristicas,
} from "../../utils/validators/validateDataPersonal";
import * as Yup from "yup";
import { RadioCircleCustom } from "../../components/form/RadioCircleCustom";
import { ButtonForm } from "../../components/form/ButtonForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Field, Formik, Form } from "formik";
// import { Form } from "react-router-dom";
import { DatosPersonalesForm } from "../../components/form/info-atleta/DatosPersonalesForm";
import { RedesSocialesForm } from "../../components/form/info-atleta/RedesSocialesForm";
import { DatosNacimientoForm } from "../../components/form/info-atleta/DatosNacimientoForm";
import { DatosDocumentos } from "../../components/form/info-atleta/DatosDocumentos";
import { CaracteristicasForm } from "../../components/form/info-atleta/CaracteristicasForm";
import { CaracteristicasDeporteForm } from "../../components/form/info-atleta/CaracteristicasDeporteForm";

export const ConsultaShowEdit = ({ cedula }) => {
  const data_selects = [
    {
      id: "datos_personales",
      value: 0,
      label: "Datos personales",
      yup_validate: {
        primer_nombre: formSchemaDataPersonal.primer_nombre,
        segundo_nombre: formSchemaDataPersonal.segundo_nombre,
        primer_apellido: formSchemaDataPersonal.primer_apellido,
        segundo_apellido: formSchemaDataPersonal.segundo_apellido,
        email: formSchemaDataPersonal.email,
        email_confirm: formSchemaDataPersonal.email_confirm,
        telefono: formSchemaDataPersonal.telefono,
        telefono_confitrm: formSchemaDataPersonal.telefono_confitrm,
      },
      values_edit: {
        primer_nombre: "",
        segundo_nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        email: "",
        email_confirm: "",
        telefono: "",
        telefono_confitrm: "",
      },
    },
    {
      id: "redes_sociales",
      value: 1,
      label: "Redes sociales",
      yup_validate: {},
      values_edit: {},
    },
    {
      id: "lugar_nacimiento",
      value: 2,
      label: "Lugar de nacimiento",
      yup_validate: {
        fecha_nacimiento: Yup.date().required("El campo es obligatorio."),
        edad: Yup.number("La edad debe ser un numero entero")
          .integer()
          .required("El campo es obligatorio.")
          .min(1),
        genero: Yup.string().required("El campo es obligatorio."),
        lugar_nacimiento: Yup.string().required("El campo es obligatorio."),
        estado: Yup.string().required("El campo es obligatorio."),
        ciudad: Yup.string().required("El campo es obligatorio."),
        municipio: Yup.string().required("El campo es obligatorio."),
        parroquia: Yup.string().required("El campo es obligatorio."),
      },
      values_edit: {
        fecha_nacimiento: "",
        edad: "",
        genero: "",
        lugar_nacimiento: "",
        estado: "",
        ciudad: "",
        municipio: "",
        parroquia: "",
      },
    },
    {
      id: "documento_identidad",
      value: 3,
      label: "Documentos de identidad",
      yup_validate: {
        cedula_num: formSchemaDataPersonal.cedula_num,
        cedula_doc: formSchemaDataPersonal.cedula_doc,

        pasaporte_num: formSchemaDataPersonal.pasaporte_num,
        pasaporte_emision: formSchemaDataPersonal.pasaporte_emision,
        pasaporte_vensimiento: formSchemaDataPersonal.pasaporte_vensimiento,
        pasaporte_doc: formSchemaDataPersonal.pasaporte_doc,

        primera_dosis: formSchemaDataPersonal.primera_dosis,
        segunda_dosis: formSchemaDataPersonal.segunda_dosis,
        tercera_dosis: formSchemaDataPersonal.tercera_dosis,
        cuarta_dosis: formSchemaDataPersonal.cuarta_dosis,
        carnet_vacunacion: formSchemaDataPersonal.carnet_vacunacion,

        certificado_nacimiento_num:
          formSchemaDataPersonal.certificado_nacimiento_num,
        certificado_nacimiento_doc:
          formSchemaDataPersonal.certificado_nacimiento_doc,
      },
      values_edit: {
        cedula_num: "",
        cedula_doc: "",

        pasaporte_num: "",
        pasaporte_emision: "",
        pasaporte_vensimiento: "",
        pasaporte_doc: "",

        primera_dosis: "",
        segunda_dosis: "",
        tercera_dosis: "",
        cuarta_dosis: "",
        carnet_vacunacion: "",

        certificado_nacimiento_num: "",
        certificado_nacimiento_doc: "",
      },
    },
    {
      id: "caracteristicas",
      value: 4,
      label: "Características",
      yup_validate: {
        estatura: formSchemaCaracteristicas.estatura,
        peso_corporal: formSchemaCaracteristicas.peso_corporal,
        talla_franela: formSchemaCaracteristicas.talla_franela,
        talla_chaqueta: formSchemaCaracteristicas.talla_chaqueta,
        talla_zapato: formSchemaCaracteristicas.talla_zapato,
        talla_pantalon: formSchemaCaracteristicas.talla_zapato,
      },
      values_edit: {
        estatura: "",
        peso_corporal: "",
        talla_franela: "",
        talla_chaqueta: "",
        talla_zapato: "",
        talla_pantalon: "",
      },
    },
    {
      id: "deporte",
      value: 5,
      label: "Deporte",
      yup_validate: {
        tipo_actividad: formSchemaCaracteristicas.tipo_actividad,
        disciplina: formSchemaCaracteristicas.disciplina,
        categoria: formSchemaCaracteristicas.categoria,
        nivel: formSchemaCaracteristicas.nivel,
        otra_actividad_deportiva:
          formSchemaCaracteristicas.otra_actividad_deportiva,
        avatar: formSchemaCaracteristicas.avatar,
      },
      values_edit: {
        tipo_actividad: "",
        disciplina: "",
        categoria: "",
        nivel: "",
        otra_actividad_deportiva: "",
        avatar: "",
      },
    },
  ];
  const defailtElement = data_selects[0];
  const [dropActive, setDropActive] = useState({
    text_btn: defailtElement.label,
    option_select: defailtElement,
    show_drop: false,
  });

  return (
    <GraySection bg="bg-[#222332]">
      <div className="text-white font-extrabold mb-10 text-center">
        <h2 className=" lg:text-3xl text-2xl">Consultas</h2>
      </div>
      <div className="">
        <ContainerForm>
          <div className="">
            <label htmlFor="" className="text-white mb-3 font-bold">
              Cedula de identidad
            </label>
            <p className="text-gray-400 text-xl">{cedula}</p>
          </div>
        </ContainerForm>

        <div className="mb-5">
          <h2 className="lg:text-xl text-2xl text-white font-extrabold text-center mb-4">
            Opciones a consultar
          </h2>

          <div className="">
            <ButtonForm
              handdleClick={() =>
                setDropActive({
                  ...dropActive,
                  show_drop: !dropActive.show_drop,
                })
              }
              className="bg-[#693CBA] text-white w-full md:hidden"
            >
              {dropActive.text_btn}
              <FontAwesomeIcon
                className="ml-3"
                icon={faAngleDown}
              ></FontAwesomeIcon>
            </ButtonForm>

            <div
              className={
                (dropActive.show_drop ? "block" : "hidden") +
                " md:flex flex-wrap justify-center rounded-lg overflow-hidden m-auto md:w-fit"
              }
            >
              {data_selects.map((data, i) => (
                <div className="w-full md:w-auto" key={i}>
                  <RadioCircleCustom
                    valueCheched={defailtElement.value}
                    handdleChange={() => {
                      setDropActive({
                        ...dropActive,
                        text_btn: data.label,
                        option_select: data,
                        show_drop: false,
                      });
                    }}
                    id={data.id}
                    name="select_data"
                    value={data.value}
                    type="radio"
                    className="p-1 px-3  rounded-none"
                  >
                    {data.label}
                  </RadioCircleCustom>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContainerForm>
          {dropActive.option_select.id == "datos_personales" && (
            <DatosPersonalesForm
              initialValues={dropActive.option_select.values_edit}
              validationSchema={Yup.object().shape(
                dropActive.option_select.yup_validate
              )}
              handdleSubmit={() => {}}
            />
          )}
          {dropActive.option_select.id == "redes_sociales" && (
            <RedesSocialesForm
              initialValues={dropActive.option_select.values_edit}
              validationSchema={Yup.object().shape(
                dropActive.option_select.yup_validate
              )}
              handdleSubmit={() => {}}
            />
          )}
          {dropActive.option_select.id == "lugar_nacimiento" && (
            <DatosNacimientoForm
              initialValues={dropActive.option_select.values_edit}
              validationSchema={Yup.object().shape(
                dropActive.option_select.yup_validate
              )}
              handdleSubmit={() => {}}
            />
          )}
          {dropActive.option_select.id == "documento_identidad" && (
            <DatosDocumentos
              initialValues={dropActive.option_select.values_edit}
              validationSchema={Yup.object().shape(
                dropActive.option_select.yup_validate
              )}
              handdleSubmit={() => {}}
            />
          )}
          {dropActive.option_select.id == "caracteristicas" && (
            <CaracteristicasForm
              initialValues={dropActive.option_select.values_edit}
              validationSchema={Yup.object().shape(
                dropActive.option_select.yup_validate
              )}
              handdleSubmit={() => {}}
            />
          )}
          {dropActive.option_select.id == "deporte" && (
            <CaracteristicasDeporteForm
              initialValues={dropActive.option_select.values_edit}
              validationSchema={Yup.object().shape(
                dropActive.option_select.yup_validate
              )}
              handdleSubmit={() => {}}
            />
          )}

          {/* <Formik
            initialValues={dropActive.option_select.values_edit}
            validationSchema={Yup.object().shape(
              dropActive.option_select.yup_validate
            )}
            onSubmit={() => {}}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="">
                  <DatosNacimientoForm errors={errors} touched={touched} />
                </div>

                <div className="md:w-[100%] p-3 flex flex-wrap justify-center">
                  <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                    <ButtonForm
                      type="submit"
                      className="bg-[#693CBA] text-white  w-[100%] "
                    >
                      Registrar
                    </ButtonForm>
                  </div>
                  <div className="py-3 md:p-3 md:max-w-[300px] w-[100%]">
                    <ButtonForm className="bg-white text-black  w-[100%]">
                      Cancelar
                    </ButtonForm>
                  </div>
                </div>
              </Form>
            )}
          </Formik> */}
          {/* {formRender()} */}
        </ContainerForm>
      </div>
      <ContainerForm></ContainerForm>
    </GraySection>
  );
};
