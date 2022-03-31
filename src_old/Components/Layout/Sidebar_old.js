// import logo200Image from '../../assets/img/logo/logo_200.png';
// import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
// import SourceLink from '../SourceLink';
// import React, { useState, useContext, useEffect } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { getMenu } from "../../Service/index";
// import { UserContext } from '../../Context/UserContext';
// import { IconContext } from 'react-icons/lib';

// import { FaGithub } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import bn from '../../utils/bemnames';

// import {
//   Nav,
//   Navbar,
//   NavItem,
//   NavLink as BSNavLink,
//   Collapse
// } from 'reactstrap';

// import {
//   MdAccountCircle,
//   MdArrowDropDownCircle,
//   MdBorderAll,
//   MdBrush,
//   MdChromeReaderMode,
//   MdDashboard,
//   MdExtension,
//   MdGroupWork,
//   MdInsertChart,
//   MdKeyboardArrowDown,
//   MdNotificationsActive,
//   MdPages,
//   MdRadioButtonChecked,
//   MdSend,
//   MdStar,
//   MdTextFields,
//   MdViewCarousel,
//   MdViewDay,
//   MdViewList,
//   MdWeb,
//   MdWidgets,
// } from 'react-icons/md';

// import Icon from '../Form/Icon';
// // class Sidebar extends React.Component {
// //   state = {
// //     isOpenComponents: true,
// //     isOpenContents: true,
// //     isOpenPages: true,
// //   };



// //   handleClick = name => () => {
// //     this.setState(prevState => {
// //       const isOpen = prevState[`isOpen${name}`];

// //       return {
// //         [`isOpen${name}`]: !isOpen,
// //       };
// //     });
// //   };


// //   render() {
// //     return (
// //       <aside className={bem.b()} data-image={sidebarBgImage}>
// //       <div className={bem.e('background')} />
// //       <div className={bem.e('content')}>
// //         <Navbar>
// //           <SourceLink className="navbar-brand d-flex">
// //             <img
// //               src={logo200Image}
// //               width="40"
// //               height="30"
// //               className="pr-2"
// //               alt=""
// //             />
// //             <span className="text-white">
// //               Reduction <FaGithub />
// //             </span>
// //           </SourceLink>
// //         </Navbar>
// //         <Nav vertical>
// //           {navItems.map(({ to, name, exact, Icon }, index) => (
// //             <NavItem key={index} className={bem.e('nav-item')}>
// //               <BSNavLink
// //                 id={`navItem-${name}-${index}`}
// //                 tag={NavLink}
// //                 to={to}
// //                 // activeClassName="active"
// //                 exact={exact.toString()}
// //               >
// //                 <Icon className={bem.e('nav-item-icon')} />
// //                 <span className="">{name}</span>
// //               </BSNavLink>
// //             </NavItem>
// //           ))}
// //         </Nav>
// //       </div>
// //     </aside>
// //     );
// //   }
// // }

// const Sidebar = () => {

//   const state = {
//     isOpenComponents: true,
//     isOpenContents: true,
//     isOpenPages: true,
//   };

//   const [stateVal, setState] = useState(state);

//   const bem = bn.create('sidebar');

//   const handleClick = name => () => {
//     setState(prevState => {
//       const isOpen = prevState[`isOpen${name}`];

//       return {
//         [`isOpen${name}`]: !isOpen,
//       };
//     });
//   };

//   const [sidebar, setSidebar] = useState(true);

//   const { userData } = useContext(UserContext);

//   const { handleMenu, sideBarData } = useContext(UserContext);

//   const showSidebar = () => setSidebar(!sidebar);

//   useEffect(() => {
//     if (sideBarData.menu.length === 0) {
//       handleMenu({ menu: JSON.parse(window.localStorage.getItem('menuData')).menu });
//     }

//   }, [sideBarData]);

//   return (
//     <aside className={bem.b()} data-image={sidebarBgImage}>
//       <div className={bem.e('background')} />
//       <div className={bem.e('content')}>
//         <Navbar>
//           <SourceLink className="navbar-brand d-flex">
//             <img
//               src={logo200Image}
//               width="40"
//               height="30"
//               className="pr-2"
//               alt=""
//             />
//             <span className="text-white">
//               Reduction <FaGithub />
//             </span>
//           </SourceLink>
//         </Navbar>
//         <Nav vertical>
//           {sideBarData.menu.map((menu, index) => (
//             menu.sub_menu.length > 0
//               ?
//               <div key={index}>
//                 <NavItem key={index}
//                   className={bem.e('nav-item')}
//                   onClick={handleClick('Components')}
//                 >
//                   <BSNavLink className={bem.e('nav-item-collapse')}>
//                   <div className="d-flex">
//                     {/* <MdExtension className={bem.e('nav-item-icon')} />
//                     <Icon> <span className=" align-self-start">{menu.menu_title}</span></Icon> */}
//                      <Icon tipo={menu.menu_icon.substring(0,2).toLowerCase()} iconName={menu.menu_icon} > </Icon><span className=" align-self-start">{menu.menu_title}</span>
   
//                   </div>
//                   <MdKeyboardArrowDown
//                     className={bem.e('nav-item-icon')}
//                     style={{
//                       padding: 0,
//                       transform: stateVal.isOpenComponents
//                         ? 'rotate(0deg)'
//                         : 'rotate(-90deg)',
//                       transitionDuration: '0.3s',
//                       transitionProperty: 'transform',
//                     }}
//                   />
//                   </BSNavLink>
//                 </NavItem>
//                 <Collapse isOpen={stateVal.isOpenComponents}>
//                 { menu.sub_menu.map((sub_menu, index) => (
//                   //console.log(sub_menu)
//                     <NavItem key={index} className={bem.e('nav-item')}>
//                         <div className="d-flex">

                     
//                      <BSNavLink
                     
//                       id={`navItem-${sub_menu.title}-${index}`}
//                       tag={NavLink}
//                       to={`${menu.menu_path}${sub_menu.path}`}
//                       exact="false"
//                     >
//                       <Icon tipo={sub_menu.icon.substring(0,2).toLowerCase()} iconName={sub_menu.icon} > </Icon>
//                       <span className="">{sub_menu.title}</span>
//                     </BSNavLink>
   
//                   </div>

//                   </NavItem>
//                 ))}
//             </Collapse>


//               </div>




//               :
//               <NavItem key={index} className={bem.e('nav-item')}>

//                 <BSNavLink
//                   id={`navItem-${menu.menu_title}-${index}`}
//                   tag={NavLink}
//                   to={menu.menu_path}
//                   // activeClassName="active"
//                   exact="false"
//                 >
//                   {/* <Icon className={bem.e('nav-item-icon')} />*/}
//                   <span className="">{menu.menu_title}</span>
//                 </BSNavLink>
//               </NavItem>
//           ))}
//         </Nav>
//       </div>
//     </aside>
//   );
// }
// export default Sidebar;