
import React from "react";
import { CloudUploadIcon, CollectionIcon, FireIcon, PlusIcon, ShieldExclamationIcon, UserAddIcon } from "@heroicons/react/solid";
import { Col, Row, Button, Dropdown } from 'react-bootstrap';

import { CustomersWidget, RevenueWidget, ActiveRooms, UsersWidget, WeeklyReportWidget, TopAuthorsWidget, TeamMembersWidget, MembersWidget, ProgressTrackWidget, EventsWidget, RankingWidget, VisitsMapWidget, SalesValueWidget, AcquisitionWidget, TimelineWidget, HotelPortal } from "components/Widgets";
import { PageVisitsTable } from "components/Tables";

export default () => {
  return (
    <>
      <div className="py-4">
        <h2><b>Dashboard</b></h2>
        <Dropdown>
          {/* <Dropdown.Toggle as={Button} variant="gray-800" className="d-inline-flex align-items-center me-2">
            <PlusIcon className="icon icon-xs me-2" />New Task
          </Dropdown.Toggle> */}
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-start mt-2 py-1">
            <Dropdown.Item className="d-flex align-items-center">
              <UserAddIcon className="icon icon-xs text-gray-400 me-2" /> Add User
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <CollectionIcon className="icon icon-xs text-gray-400 me-2" /> Add Widget
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <CloudUploadIcon className="icon icon-xs text-gray-400 me-2" /> Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="d-flex align-items-center">
              <ShieldExclamationIcon className="icon icon-xs text-gray-400 me-2" /> Preview Security
            </Dropdown.Item>

            <Dropdown.Divider as="div" className="my-1" />

            <Dropdown.Item className="d-flex align-items-center">
              <FireIcon className="icon icon-xs text-danger me-2" /> Upgrade to Pro
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* <Row className="justify-content-lg-center">
        <Col xs={12} className="mb-4">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
      </Row> */}

      <Row>
        {/* <Col xs={12} sm={6} xl={4} className="mb-4">
          <CustomersWidget
            category="Customers"
            title="345k"
            period="May 1 - June 1"
            percentage={18.2}
          />
        </Col> */}

        {/* <Col xs={12} sm={6} xl={4} className="mb-4">
          <RevenueWidget
            category="Revenue"
            title="$43,594"
            period="May 1 - June 1"
            percentage={-5.4}
          />
        </Col> */}

        {/* <Col xs={12} sm={12} xl={4} className="mb-4">
          <UsersWidget
            category="Users"
            title="15.3k"
            period="May 1 - June 1"
            percentage={20}
          />
        </Col> */}
        <Col xs={12} sm={12} xl={4} className="mb-4">
          <MembersWidget
          />
        </Col>
        <Col xs={12} sm={12} xl={4} className="mb-4">
          <ActiveRooms />
        </Col>
        <Col xs={12} sm={12} xl={4} className="mb-4">
              <HotelPortal />
            </Col>
      </Row>

      <Row>
        <Col xs={12} xl={7} xxl={8} className="mb-4">
          <Row>
            {/* <Col xs={12} className="mb-4">
              <PageVisitsTable />
            </Col> */}

            {/* <Col xs={12} xxl={6} className="mb-4">
              <ProgressTrackWidget />
            </Col> */}

            {/* <Col xs={12}>
              <EventsWidget />
            </Col> */}
          </Row>
        </Col>

        <Col xs={12} xl={5} xxl={4} className="mb-4">
          {/* <Col xs={12} className="px-0 mb-4">
            <RankingWidget />
          </Col> */}

          {/* <Col xs={12} className="px-0 mb-4">
            <AcquisitionWidget />
          </Col> */}

          {/* <Col xs={12} className="px-0">
            <VisitsMapWidget />
          </Col> */}
        </Col>
      </Row>
    </>
  );
};
