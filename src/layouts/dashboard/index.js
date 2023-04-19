/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import authorsTableData from "layouts/tables/data/authorsTableData";

function Dashboard() {
  const { sales } = reportsLineChartData;
  // const { sales, tasks } = reportsLineChartData;
  const { columns, rows } = authorsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than last week",
                }}
              />
            </MDBox>
          </Grid> */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_rounded"
                title="Total users"
                count="250"
                percentage={{
                  color: "success",
                  // amount: "+3%",
                  label: "Buyers and sellers",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add_alt_rounded"
                title="New users"
                count="+45"
                percentage={{
                  color: "success",
                  // amount: "+1%",
                  label: "Today",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="attach_money"
                title="All Sales"
                count="1000"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Per day",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+33%</strong>) Sales per day over a month
                    </>
                  }
                  date="updated 2 hrs ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>

            <Grid item xs={13} md={7} lg={5}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Weekly sales
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>

            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Weekly sales"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid> */}
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid> */}
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
             <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid> 
             <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid> 
          </Grid>
        </MDBox> */}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
