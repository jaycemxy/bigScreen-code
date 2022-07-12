import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import {baseEchartsOptions} from '../shared/base-echarts-options';
import {createEchartsOptions} from '../shared/create-echerts-options';

export const Chart1 = ()=>{
    const divRef = useRef(null);
    useEffect(()=>{
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current);
        // 绘制图表
        myChart.setOption(createEchartsOptions({
            ...baseEchartsOptions,
            xAxis: {
                data: ['城关区', '七里河区', '西固区', '安宁区', '永登区', '渝中区', '兰州新区'],
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                }
            },
            series: [{
                type: 'bar',
                data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
            }]
        }));
    }, []);

    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
        </div>
    );
}
