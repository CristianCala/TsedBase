import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { clearStateRegister } from '../../redux/features/registerStepsSlice';
// import Images from " ../../";
import Images from '../../utils/images/images';
import { AvatarWithInfo } from './AvatarWithInfo';
import { DropdownMenuSidebar } from './DropdownMenuSidebar';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/features/userSlice';
export const SidebarAdmin = ({ menuActive, setMenu }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const dataMenu = [
    {
      label: 'Registrar Datos Atletas',
      sub_menu: [
        {
          label: 'Datos personales',
          link: '/datos-deportivos',
        },
        {
          label: 'Características',
          link: '/caracteristcas',
        },
      ],
    },
    {
      label: 'Notificaciones',
      link: '/notificaciones',
    },
    {
      label: 'Reportes',
      link: '/reportes',
    },
    {
      label: 'Consultas',
      link: '/consultas',
    },
    {
      label: 'Asignación de atletas',
      link: '/asignacion-de-atletas',
    },
    {
      label: 'Eventos',
      link: '/eventos',
    },
    {
      label: 'Configuración',
      sub_menu: [
        {
          label: 'Editar perfil',
          link: '/configuracion/editar-perfil',
        },
        {
          label: 'Cambiar contraseña',
          link: '/configuracion/cambio-de-contraseña',
        },
      ],
    },
  ];
  return (
    <div
      onClick={(e) => {
        if (e.target.id == 'content_sidebar') {
          setMenu(false);
        }
      }}
      id="content_sidebar"
      className={`z-[1000] fixed top-0 left-0 lg:static lg:translate-x-[0] translate-x-[-300px] transition-all lg:opacity-1 ${
        menuActive && 'w-[100%] translate-x-[0] opacity-1'
      } lg:w-auto`}
    >
      <aside
        className={
          'scroll-none flex flex-col justify-between overflow-y-auto transition-all translate-x-[-300px] h-screen bg-[#222332]  w-[300px] lg:transform-none   ' +
          (menuActive ? 'translate-x-[0]' : '')
        }
      >
        <div className="">
          <div className="flex justify-center p-10">
            <div className="">
              <Link to="/dashboard">
                <img src={Images.logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="px-10 py-4 ">
            <AvatarWithInfo
              img={Images.representante}
              name="Samuel Graterol"
              info="Atleta y colaborador"
            />
          </div>

          {/* * menu  */}
          {dataMenu.map((item, i) => {
            const pathname = decodeURI(location.pathname);
            const arr_links_submenu =
              item.sub_menu &&
              item.sub_menu.map((subItem) => {
                return subItem.link;
              });

            return item.sub_menu ? (
              <DropdownMenuSidebar
                key={i}
                text={item.label}
                show={arr_links_submenu.includes(pathname)}
              >
                {item.sub_menu.map((subItem, subI) => {
                  return (
                    <NavLink
                      key={subI}
                      to={subItem.link}
                      className={`block px-10 py-4 text-white  transition-all ${
                        pathname == subItem.link && 'bg-[#976CE5]'
                      }`}
                    >
                      {subItem.label}
                    </NavLink>
                  );
                })}
              </DropdownMenuSidebar>
            ) : (
              <NavLink
                key={i}
                to={item.link}
                // className="block px-10 py-4 text-white hover:bg-[#693CBA] transition-all"
                className={({ isActive }) => {
                  let classBase = `block px-10 py-4 text-white hover:bg-[#693CBA] transition-all ${
                    isActive && 'bg-[#693CBA]'
                  }`;
                  return classBase;
                }}
              >
                {item.label}
              </NavLink>
            );
          })}

          {/* <DropdownMenuSidebar text={"Registrar Datos Atletas"}>
            <Link
              to="/datos-deportivos"
              className="block px-10 py-4 text-white  transition-all"
            >
              Datos personales
            </Link>
            <Link
              to="/caracteristcas"
              className="block px-10 py-4 text-white  transition-all"
            >
              Características
            </Link>
          </DropdownMenuSidebar>
          <a
            href="#"
            className="block px-10 py-4 text-white hover:bg-[#693CBA] transition-all"
          >
            Notificaciones
          </a>
          <Link
            to="/reportes"
            className="block px-10 py-4 text-white hover:bg-[#693CBA] transition-all"
          >
            Reportes
          </Link>
          <a
            href="#"
            className="block px-10 py-4 text-white hover:bg-[#693CBA] transition-all"
          >
            Consultas
          </a>
          <a
            href="/asignacion-de-atletas"
            className="block px-10 py-4 text-white hover:bg-[#693CBA] transition-all"
          >
            Asignación de atletas
          </a>
          <DropdownMenuSidebar text={"Configuración"}>
            <a href="#" className="block px-10 py-4 text-white  transition-all">
              Editar perfil
            </a>
            <a href="#" className="block px-10 py-4 text-white  transition-all">
              Cambiar contraseña
            </a>
          </DropdownMenuSidebar> */}

          {/* * menu end*/}
        </div>

        <div className="">
          <div
            onClick={() => dispatch(logOut())}
            className="cursor-pointer block px-10 py-4 text-white bg-[#693CBA] transition-all"
          >
            Cerrar Sesión
          </div>
        </div>
      </aside>
    </div>
  );
};
