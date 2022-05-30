// import { BarChart } from '@material-ui/icons';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import LineChar from './LineChar';
import BarChart from './BarChart';

const Container3 = () => {

  

    return (
        <div className="Container3">
            <div className="con3-data">
                <div className="line-chart">
                <LineChar/>

                </div>
                <div className="line-chart">
                <BarChart/>

                </div>

                                           

            </div>
        </div>
    )
}

export default Container3