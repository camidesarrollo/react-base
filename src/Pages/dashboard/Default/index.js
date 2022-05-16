import { useEffect, useState } from "react";
// material-ui
import { Grid } from "@mui/material";

import EarningCard from "../EarningCard";
import MenuCard from "../MenuCard";
import PopularCard from "../PopularCard";
import TotalOrderLineChartCard from "../TotalOrderLineChartCard";
import TotalIncomeDarkCard from "../TotalIncomeDarkCard";
import TotalIncomeLightCard from "../TotalIncomeLightCard";
import TotalGrowthBarChart from "../TotalGrowthBarChart";
import { gridSpacing } from "../../../store/constant";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const navItems = JSON.parse(window.localStorage.getItem("menuData"));

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    navItems.map(function (object, i) {
      object.submenu.map(function (object_2, i) {
        console.log("X");
      });
    });
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        {navItems.map(function (object, i) {
             return ( <Grid key={i} container spacing={gridSpacing}>
           
                {object.submenu.map(function (object_2, x) {
                    return (<Grid item lg={4} md={6} sm={6} xs={12}> <MenuCard isLoading={isLoading} menuName = {object.menu_title} submenuName = {object_2.menu_title}/> </Grid>)
                })}
            </Grid>)
        })}
        {/* <Grid container spacing={gridSpacing}>
               
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}
      </Grid>
      {/* <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid> */}
    </Grid>
  );
};

export default Dashboard;
