
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { CSSTransition } from 'react-transition-group';
import { ChartBarIcon, ChevronRightIcon, ClipboardListIcon, InformationCircleIcon, LocationMarkerIcon, UsersIcon, ViewGridIcon, XIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { Nav, Badge, Image, Button, Dropdown, Navbar, Collapse, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "routes";
import ReactHero from "assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const [collapsedItems, setCollapsedItems] = useState([pathname]);
  const contracted = props.contracted ? "contracted" : "";
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);
  const onMouseEnter = () => props.onMouseEnter && props.onMouseEnter();
  const onMouseLeave = () => props.onMouseLeave && props.onMouseLeave();

  const onNavItemCollapse = (itemKey) => {
    const isCollapsed = collapsedItems.some(item => item.includes(itemKey));
    const newCollapsedItems = isCollapsed ? collapsedItems.filter(item => !item.includes(itemKey)) : [...collapsedItems, itemKey];
    setCollapsedItems(newCollapsedItems);
  };

  const events = isMobile ? {} : { onMouseEnter, onMouseLeave };

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon: NavItemIcon, children = null } = props;
    const isOpened = collapsedItems.some(item => item.includes(eventKey));

    return (
      <Nav.Item>
        <Nav.Link
          onClick={() => onNavItemCollapse(eventKey)}
          aria-expanded={isOpened}
          aria-controls={eventKey}
          className="d-flex justify-content-between align-items-center"
        >
          <span>
            <span className="sidebar-icon">
              <NavItemIcon className="icon icon-xs me-2" />
            </span>
            <span className="sidebar-text">
              {title}
            </span>
          </span>
          <span className="link-arrow">
            <ChevronRightIcon className="icon icon-sm" />
          </span>
        </Nav.Link>
        <Collapse in={isOpened} className="multi-level">
          <div id={eventKey}>
            {children}
          </div>
        </Collapse>
      </Nav.Item>
    );
  };

  const NavItem = (props) => {
    const { title, link, target, icon: NavItemIcon, image, badgeText, badgeBg, badgeColor = "white" } = props;
    const classNames = badgeText ? "d-flex align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link as={Link} to={link} target={target} className={classNames}>
          <span>
            {NavItemIcon && (
              <span className="sidebar-icon">
                <NavItemIcon className="icon icon-xs me-2" />
              </span>
            )}

            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            {!show && contracted && !NavItemIcon && !image ? (
              <span className="sidebar-text-contracted">
                {title[0]}
              </span>
            ) : null}

            <span className="sidebar-text">{title}</span>
          </span>

          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-sm notification-count">
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar as={Col} xs={12} expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-lg-none">
        <Navbar.Brand as={Link} to={Routes.DashboardOverview.path} className="me-lg-5">
          <Image src={ReactHero} className="navbar-brand-dark" />
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <Navbar.Toggle as={Button} onClick={onCollapse}>
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
        </div>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar {...events} className={`${contracted} ${showClass} sidebar d-lg-block bg-gray-800 text-white collapse`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="avatar-lg me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h5 className="mb-3">Hi, Jane</h5>
                  <Button as={Link} variant="secondary" size="sm" to={Routes.Signin.path} className="d-inline-flex align-items-center">
                    <LogoutIcon className="icon icon-xxs me-1" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <XIcon className="icon icon-xs" />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="IOpen" image={ReactHero} />

              <CollapsableNavItem eventKey="dashboard/" title="Dashboard" icon={ChartBarIcon}>
                <NavItem title="Overview" link={Routes.DashboardOverview.path} />
              </CollapsableNavItem>
              <NavItem title="Team" icon={UsersIcon} link={Routes.Team.path} />
              <NavItem title="Create Portal" icon={ViewGridIcon} link={Routes.CreatePortal.path} />
              <NavItem title="Hotel Portal" icon={ClipboardListIcon} link={Routes.HotelPortal.path} />
              <NavItem title="Active Rooms" icon={LocationMarkerIcon} link={Routes.ActiveRooms.path} />
              <NavItem title="Users List" icon={UsersIcon} link={Routes.Users.path} />
              <NavItem title="House Keeping" icon={InformationCircleIcon} link={Routes.HouseKeeping.path} />
              {/* <NavItem title="Transactions" icon={CreditCardIcon} link={Routes.Transactions.path} />
              <NavItem title="Task List" icon={ClipboardListIcon} link={Routes.Tasks.path} /> */}
              {/* <NavItem title="Settings" icon={CogIcon} link={Routes.Settings.path} /> */}
              {/* <NavItem title="Calendar" icon={CalendarIcon} link={Routes.Calendar.path} />
              <NavItem title="Map" icon={LocationMarkerIcon} link={Routes.Map.path} />
              <NavItem title="Widgets" icon={TemplateIcon} link={Routes.Widgets.path} /> */}

              {/* <CollapsableNavItem eventKey="tables/" title="Tables" icon={TableIcon}>
                <NavItem title="DataTables" link={Routes.Datatables.path} />
                <NavItem title="Bootstrap Tables" link={Routes.BootstrapTables.path} />
              </CollapsableNavItem> */}

     

              <Dropdown.Divider className="my-3 border-indigo" />

              {/* <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={InformationCircleIcon}>
                <NavItem title="Overview" link={Routes.DocsOverview.path} />
                <NavItem title="Download" link={Routes.DocsDownload.path} />
                <NavItem title="Quick Start" link={Routes.DocsQuickStart.path} />
                <NavItem title="License" link={Routes.DocsLicense.path} />
                <NavItem title="Folder Structure" link={Routes.DocsFolderStructure.path} />
                <NavItem title="Build Tools" link={Routes.DocsBuild.path} />
                <NavItem title="Changelog" link={Routes.DocsChangelog.path} />
              </CollapsableNavItem> */}

              {/* <CollapsableNavItem eventKey="components/" title="Components" icon={ArchiveIcon}>
                <NavItem title="Accordion" link={Routes.Accordions.path} />
                <NavItem title="Alerts" link={Routes.Alerts.path} />
                <NavItem title="Badges" link={Routes.Badges.path} />
                <NavItem title="Breadcrumbs" link={Routes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={Routes.Buttons.path} />
                <NavItem title="Forms" link={Routes.Forms.path} />
                <NavItem title="Modals" link={Routes.Modals.path} />
                <NavItem title="Navbars" link={Routes.Navbars.path} />
                <NavItem title="Navs" link={Routes.Navs.path} />
                <NavItem title="Pagination" link={Routes.Pagination.path} />
                <NavItem title="Popovers" link={Routes.Popovers.path} />
                <NavItem title="Progress" link={Routes.Progress.path} />
                <NavItem title="Tables" link={Routes.Tables.path} />
                <NavItem title="Tabs" link={Routes.Tabs.path} />
                <NavItem title="Toasts" link={Routes.Toasts.path} />
                <NavItem title="Tooltips" link={Routes.Tooltips.path} />
                <NavItem title="Widgets" link={Routes.WidgetsComponent.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="plugins/" title="Plugins" icon={ChartPieIcon}>
                <NavItem title="Charts" link={Routes.PluginCharts.path} />
                <NavItem title="Calendar" link={Routes.PluginCalendar.path} />
                <NavItem title="DataTable" link={Routes.PluginDatatable.path} />
                <NavItem title="Map" link={Routes.PluginMap.path} />
                <NavItem title="DropZone" link={Routes.PluginDropzone.path} />
                <NavItem title="SweetAlert" link={Routes.PluginSweetAlert.path} />
              </CollapsableNavItem> */}

            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
