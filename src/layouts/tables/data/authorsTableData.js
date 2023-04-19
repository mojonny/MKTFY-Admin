/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDBadge from "components/MDBadge";

// Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Listing = ({ productName, listingNumber }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/* <MDAvatar src={image} name={name} size="sm" /> */}
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="caption">
          {listingNumber}
        </MDTypography>
        <MDTypography display="block" variant="caption">
          {productName}
        </MDTypography>
        {/* <MDTypography variant="caption">{email}</MDTypography> */}
      </MDBox>
    </MDBox>
  );

  const SellerName = ({ sellerName }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">{sellerName}</MDTypography>
    </MDBox>
  );
  const Price = ({ price }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">{price}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Product", accessor: "productName", width: "45%", align: "left" },
      { Header: "Seller name", accessor: "sellerName", align: "left" },
      { Header: "Price", accessor: "price", align: "center" },
    ],

    rows: [
      {
        productName: <Listing productName="Pearl The Cat:Monster Edition" />,
        sellerName: <SellerName sellerName="20" />,
        price: <Price price="12" />,

        // (
        //   <MDBox ml={-1}>
        //     <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
        //   </MDBox>
        // ),
        // employed: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     23/04/18
        //   </MDTypography>
        // ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        productName: <Listing productName="Pearl The Cat: Breakfast Edition" />,
        sellerName: <SellerName sellerName="34" />,
        price: <Price price="21" />,
        // employed: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     11/01/19
        //   </MDTypography>
        // ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      {
        productName: <Listing productName="Pearl The Cat: Toy Edition" />,
        sellerName: <SellerName sellerName="6" />,
        price: <Price price="13" />,
        // employed: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     19/09/17
        //   </MDTypography>
        // ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        //     Edit
        //   </MDTypography>
        // ),
      },
      // {
      //   author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      //   function: <Job title="Programator" description="Developer" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   // employed: (
      //   //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //   //     24/12/08
      //   //   </MDTypography>
      //   // ),
      //   // action: (
      //   //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //   //     Edit
      //   //   </MDTypography>
      //   // ),
      // },
      // {
      //   author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
      //   function: <Job title="Manager" description="Executive" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   // employed: (
      //   //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //   //     04/10/21
      //   //   </MDTypography>
      //   // ),
      //   // action: (
      //   //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //   //     Edit
      //   //   </MDTypography>
      //   // ),
      // },
      // {
      //   author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      //   function: <Job title="Programator" description="Developer" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   // employed: (
      //   //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //   //     14/09/20
      //   //   </MDTypography>
      //   // ),
      //   // action: (
      //   //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //   //     Edit
      //   //   </MDTypography>
      //   // ),
      // },
    ],
  };
}
