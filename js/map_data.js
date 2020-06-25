window.onload=function() {
    
    (function map9 () {
        // 图标九
    var myChart9 = echarts.init(document.getElementById('map9'));
    option9 = {
        color:['rgb(154,220,215)','rgb(106,114,196)','rgb(226,112,163)'],
        tooltip: {
            trigger: 'item',
            textStyle: {
                fontSize:10,
            },
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            // containLabel: true
        },
        legend: {
            orient: 'vertical',
            right: 5,
            bottom: 10,
            itemWidth:15,
            itemHeight: 10,
            data: ['直接访问', '邮件营销', '联盟广告']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                left:0,
                startAngle: -75,
                center: ['45%','50%'],
                radius: ['45%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 553, name: '直接访问'},
                    {value: 281, name: '邮件营销'},
                    {value: 166, name: '联盟广告'},
                ]
            }
        ]
    }; 
    myChart9.setOption(option9);
    window.addEventListener('resize',function(){
        myChart9.resize()
    })
    })();
    (function map8() {
        // 图标八
        var myChart8 = echarts.init(document.getElementById('map8'));
        option8 = {
            
            tooltip: {
                trigger: 'axis',
            },
            grid: {
                top:'25',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [      
                {
                    name: '销售总额',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        color: '#1A85D8'
                    },
                    lineStyle: {
                        color: '#1A85D8'
                    },
                    areaStyle: {
                        color: '#7FD5E9'
                    },
                    data: [100, 100, 162, 165, 90, 110, 189, 134, 163, 135, 220,99]
                },
            ]
        };
        myChart8.setOption(option8);
        window.addEventListener('resize',function(){
            myChart8.resize()
        })
    })();
    (function map7 () {
        // 图标七
        var myChart7 = echarts.init(document.getElementById('map7'));
        option7 = {     
            color: ['#70BF33', '#47BDFF', '#476CFF'],
           
            grid: {
                top:'15%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                width:'auto',
                height:'auto',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Forest', 'Steppe', 'Desert']
            },
            xAxis: [
                {
                    type: 'category',
                    splitNumber: 7,
                    axisLabel: {
                        fontSize :10
                    },
                    axisTick: {show: false},
                    data: ['2012', '2013', '2014', '2015', '2016','2017','2018']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    // name: 'Forest',
                    type: 'bar',
                    barGap: 0,
                    // label: labelOption,
                    data: [320, 332, 301, 334, 390,300,289]
                },
                {
                    // name: 'Steppe',
                    type: 'bar',
                    // label: labelOption,
                    data: [220, 182, 191, 234, 290,189,261]
                },
                {
                    // name: 'Desert',
                    type: 'bar',
                    // label: labelOption,
                    data: [150, 232, 201, 154, 190,200,240]
                },
                
            ]
        };
        myChart7.setOption(option7);
        window.addEventListener('resize',function(){
            myChart7.resize()
        })
    })();
    (function map6() {
        // 图标六
        var myChart6 = echarts.init(document.getElementById('map6'));
        option6 = {
            color: ['rgb(211,222,228)'],
            
            tooltip: {
                trigger:'item',
            },
            grid: {
                top:'20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show:false
                },
                axisTick: {
                    show: false
                },
                data: ['Jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [{
                data: [120, 100,200, 150, 80, 70, 110,167,110, 130],
                type: 'bar',
                barWidth: '30%',
                emphasis: {
                    itemStyle: {
                    color: 'rgb(67,106,215)'
                    },
                },
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        };
        myChart6.setOption(option6);
        window.addEventListener('resize',function(){
            myChart6.resize()
        })
    })();
    (function map5() {
        // 图标五
        var myChart5 = echarts.init(document.getElementById('map5'));
        option5 = {
            backgroundColor:'rgba(240, 240, 240, 0.5)',
    
            legend: {
                show:true,
                top: '15%',
            },
            tooltip: {
                trigger: 'axis',
            },
            grid: {
                show:true,
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: 
                {
                    type: 'category',
                    spiltLine: {
                        show:true
                    },
                    data: ['Jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
                },
            yAxis: {
                type:'category',
                spiltLine: {
                    show:true
                },
                nameTextStyle: {
                    show: false
                }
            },
            series: [
                // {
                //     name: '成交',
                //     type: 'line',
                //     smooth: true,
                //     areaStyle: {
                //      color: '#7FD5E9',
                //     },
                //     data: [140, 50, 21, 54, 260, 530, 260,21,54,62,224]
                // },
                // {
                //     name: '预购',
                //     type: 'line',
                //     smooth: true,
                //     data: [30, 72, 10, 291, 390, 30, 10,70,140,88,30]
                // },
                {
                    name: '产量',
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    symbol: 'none',
                    areaStyle: {
                        color: '#7FD5E9',
                    },
                    data: [20,20,40,50,60,70,80,90,100,90,80,70]
                },
                {
                    name: '销售总额',
                    type: 'line',
                    smooth: true,
                    //  stack:'销售总额',
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    areaStyle: {
                        color: '#7FD5E9'
                    },
                    data: [150, 80, 162, 165, 90, 110, 189, 134, 163, 135, 80,99]
                },
            ]
        };
        myChart5.setOption(option5);
        window.addEventListener('resize',function(){
            myChart5.resize()
        })
    })();
    (function map4() {
        // 图标四
        var myChart4 = echarts.init(document.getElementById('map4'));
        option4 = {
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    labelLine: {
                        show:false
                    },
                    label: {
                        position:'inside',
                        formatter: '{c}'
                    },
                    radius: [20, 70],
                    center: ['55%', '50%'],
                    roseType: 'area',
                    data: [
                        {value: 10, name: 'rose1'},
                        {value: 5, name: 'rose2'},
                        {value: 15, name: 'rose3'},
                        {value: 25, name: 'rose4'},
                        {value: 20, name: 'rose5'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    animation: false,
                    radius: ['80%', '83%'],
                    center:['55%', '50%'],
                    avoidLabelOverlap: false,
                    labelLine: {
                        show: true,
                        length:10,
                        length2: 10
                    },
                    label: {
                        show:true,
                        fontSize:10
                    },
                    data: [
                        {value: 3, name: '直接访问'},
                        {value: 3, name: '邮件营销'},
                        {value: 2, name: '联盟广告'},
                        {value: 1, name: '视频广告'},
                        {value: 4, name: '搜索引擎'},
                        {value: 4, name: '搜索引擎'},
                        {value: 4, name: '搜索引擎'},
                        {value: 4, name: '搜索引擎'}
                    ]
                }

            ]
        };
        myChart4.setOption(option4);
        window.addEventListener('resize',function(){
            myChart4.resize()
        })
    })();
    (function map3() {
        // 图标三
        var myChart3 = echarts.init(document.getElementById('map3'));
        var option3 = {
            // grid: {
            //     left: '3%',
            //     right: '4%',
            //     bottom: '3%',
            //     containLabel: true
            // },
            legend: {
                orient: 'vertical',
                right: 8,
                data: ['直接访问', '邮件营销', '联盟广告']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    center: ['45%','50%'],
                    radius: ['50%', '70%'],
                    startAngle:-80,
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                        fontSize:'5',
                        formatter:'{b}:{c}'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold'
                        },
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 55, name: '直接访问'},
                        {value: 28, name: '邮件营销'},
                        {value: 16, name: '联盟广告'},
                    ]
                }
            ]
        };
        myChart3.setOption(option3);
        window.addEventListener('resize',function(){
            myChart3.resize()
        })
    })();
    (function map2() {
        // 图表二
        var myChart2 = echarts.init(document.getElementById('map2'));
        var mapdata = [
            {name: '济南市', value: 390},
            {name: '菏泽市', value: 158},
            {name: '德州市', value: 252},
            {name: '聊城市', value: 99},
            {name: '泰安市', value: 189},
            {name: '临沂市', value: 52},
            {name: '淄博市', value: 158},
            {name: '枣庄市', value: 152},
            {name: '滨州市', value: 189},
            {name: '潍坊市', value: 160},
            {name: '东营市', value: 80},
            {name: '青岛市', value: 180},
            {name: '烟台市', value: 190},
            {name: '威海市', value: 290},
            {name: '日照市', value: 190},
            {name: '济宁市', value: 190},
        ];

         var geoCoordMap = {
             '济南市':[117,36.65],
             '菏泽市':[115.43,35.24],
             '德州市':[116.29,37.45],
             '聊城市':[115.97,36.45],
             '泰安市':[117.13,36.18],
             '临沂市':[118.35,35.05],
             '淄博市':[118.05,36.78],
             '枣庄市':[117.57,34.86],
             '滨州市':[118.03,37.36],
             '潍坊市':[119.1,36.62],
             '东营市':[118.49,37.46],
             '青岛市':[120.33,36.07],
             '烟台市':[121.39,37.52],
             '威海市':[122.1,37.5],
             '日照市':[119.46,35.42],
             '济宁市':[116.59,35.38],
         }

         var convertData = function (mapdata) {
            var res = [];
            for (var i = 0; i < mapdata.length; i++) {
                var geoCoord = geoCoordMap[mapdata[i].name];
                if (geoCoord) {
                    res.push({
                        name: mapdata[i].name,
                        value: geoCoord.concat(mapdata[i].value)
                    });
                }
            }
            // console.log(res);
            return res;    
        };

         option2 = {
             backgroundColor:'#ADD8E6',
             tooltip: {
                 show:true,
                 left:0
             },
             zoom: 1,
             geo: {
                    map:'shandong',
                    show: true,
                    roam: true,
                    left:'4%',
                    right:'4%',
                    // layoutCenter: ['50%','50%'],
                    // layoutSize: 200,
                    emphasis: {
                        label: {
                            show:false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#4682B4',
                            borderColor: '#ccc',//线
                            shadowColor: '#092f8f',//外发光
                            // shadowBlur: 20
                        },
                        emphasis: {
                            areaColor: '#191970',//悬浮区背景
                        }
                    }
                },
             series : [
                 // 显示地域名字分布
                {   
                    symbolSize: 5,
                    itemStyle: {
                        color: '#fff'
                    },
                    label: {
                        formatter: '{b}',
                         position: 'top',
                         show: true,
                         fontSize:8,
                         distance :-15,
                         fontStyle:'normal',
                         fontWeight:'normal',
                         fontFamily:'Arial',
                    },
                    emphasis: {
                        label: {
                            show:false
                        }
                    },
                    name: 'light',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(mapdata),
                },
                
                //  显示地图
                {
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    aspectScale: 0.85, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    // label: {
                    //     normal: {
                    //         show: false
                    //     },
                    //     emphasis: {
                    //         show: false,
                    //         textStyle: {
                    //             color: '#fff'
                    //         }
                    //     }
                    // },
                    roam: true,
                    // itemStyle: {
                    //     normal: {
                    //         areaColor: '#031525',
                    //         borderColor: '#ccc',
                    //     },
                    //     emphasis: {
                    //         areaColor: '#2B91B7'
                    //     }
                    // },
                    animation: false,
                    data: mapdata
                },

                // 显示泡泡
                {
                    name: '数据统计',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: [40,20],
                    label: {
                        normal: {
                            show: true,
                            position:'inside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            },
                            formatter (value){
                                console.log(value);
                                return value.data.value[2]
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#D8BC37', //标志颜色
                        }
                    },
                    data: convertData(mapdata),
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    zlevel: 1
                },
            ]
         }
        myChart2.setOption(option2);
        window.addEventListener('resize',function(){
            myChart2.resize()
        })

    })();
    (function map1() {
        // 图标一
        var myChart1 = echarts.init(document.getElementById('map1'));
        var dataAxis = ['济南市', '青岛市', '烟台市', '淄博市', '威海市', '济宁市', '潍坊市', '临沂市', '东营市', '泰安市', '菏泽市', '德州市', '滨州市','日照市','枣庄市','聊城市'];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 402, 301, 90, 149, 210, 122, 133,107];
        var yMax = 500;
        var dataShadow = [];
        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
        var option1 = {
            grid: {
                left: '3%',
                right: '3%',
                top: '15%',
                bottom: '10%',
                containLabel: true
            },
            barWidth: '40%',
            xAxis: {
                splitNumber :16,
                axisLabel:{
                    rotate:-20,
                    verticalAlign: 'top',
                    formatter:function(value){
                        return value.split('').join('\n')
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                data: dataAxis,
            },
            yAxis: {
                type:'value',
                splitNumber: 6,
                axisLine: {
                    show :false
                },
                axisTick: {
                    show:false
                },
                axisLabel: {  
                    show: true, 
                    interval: 'auto',   
                    formatter(value){
                        return `${value/yMax*100}%`
                    }
                    // formatter: '{value}%'  
                    },  
                data: []
            },
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        color: 'rgba(128,200,192,0.7)',
                        barBorderRadius:5
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false
                },

                {
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius:5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        itemStyle: {
                            color: 'rgb(58,101,219)'
                        }
                    },
                    data: data
                }
            ]
        }
        myChart1.setOption(option1);
        window.addEventListener('resize',function(){
            myChart1.resize()
        })
    })();
}
