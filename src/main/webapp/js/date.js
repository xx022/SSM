$(function(){




        //得到当前时间
        var date_now = new Date();
        //得到当前年份
        var year = date_now.getFullYear();
        //得到当前月份
        //注：
        //  1：js中获取Date中的month时，会比当前月份少一个月，所以这里需要先加一
        //  2: 判断当前月份是否小于10，如果小于，那么就在月份的前面加一个 '0' ， 如果大于，就显示当前月份
        var month = date_now.getMonth()+1 < 10 ? "0"+(date_now.getMonth()+1) : (date_now.getMonth()+1);
        //得到当前日子（多少号）
        var date = date_now.getDate() < 10 ? "0"+date_now.getDate() : date_now.getDate();
        //设置input标签的max属性


        var mintiem = year+"-"+month+"-"+"01"+" "+"00:00:00";
        var maxtiem = year+"-"+month+"-"+ date;
        //或者为这样的

        // if($("#StartTime").length>0){
        //     alert($("#StartTime").val());
        //     jeDate("#StartTime",{
        //         format:"YYYY-MM-DD hh:mm:ss",
        //         onClose:false,
        //         isinitVal:false,
        //         isTime:true,
        //         minDate:mintiem,
        //         maxDate:maxtiem,
        //
        //     });
        //
        //     jeDate("#EndTime",{
        //         format:"YYYY-MM-DD hh:mm:ss",
        //         onClose:false,
        //         isTime:true,
        //         minDate:mintiem,
        //         maxDate:maxtiem
        //     });
        //
        // }

        // jeDate("#StartTime",{
        //     format:"YYYY-MM-DD hh:mm:ss",
        //     onClose:false,
        //     isTime:true,
        //     minDate:mintiem,
        //     maxDate:maxtiem,
        //
        // });
        //
        // jeDate("#EndTime",{
        //     format:"YYYY-MM-DD hh:mm:ss",
        //     onClose:false,
        //     isTime:true,
        //     minDate:mintiem,
        //     maxDate:maxtiem
        // });

        // var start = {}, end = {};
        // var endT;
        // jeDate('#EndTime',{
        //     format: 'YYYY-MM-DD hh:mm:ss',
        //     minDate: '2014-06-16 23:59:59', //设定最小日期为当前日期
        //     maxDate: function (that) {
        //         //that 指向实例对象
        //         return jeDate.valText(that.valCell) == "" ? jeDate.nowDate({DD:0}) : start.maxDate;
        //     }, //设定最大日期为当前日期
        //     donefun: function(obj){
        //         end.minDate = obj.val; //开始日选好后，重置结束日的最小日期
        //         t = getdaysinmonth(jeDate.getLunar(obj.date[0]).cY,jeDate.getLunar(obj.date[0]).cM);
        //
        //         // jeDate("#EndTime",LinkageEndDate(true));
        //         jeDate("#StartTime",{
        //             format: 'YYYY-MM-DD hh:mm:ss',
        //             minDate:t.yy,
        //             maxDate:t.ss
        //         })
        //
        //     }
        // });


        function getdaysinmonth(year,month){
            var date=new Date(year,month,0);
            month =month< 10 ? "0"+month : month;
            var day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
            var ss = year+"-"+month+"-"+day+" "+"23:59:59";
            var yy = year+"-"+month+"-"+"01"+" "+"23:59:59";

            // alert(ss);
            return {"ss":ss,"yy":yy}
        }

        // var start = {}, end = {};
        // var s,m;
        //
        // jeDate('#StartTime',{
        //     format: 'YYYY-MM-DD hh:mm:ss',
        //     minDate: '2014-06-16 23:59:59', //设定最小日期为当前日期
        //     maxDate: function (that) {
        //         //that 指向实例对象
        //         return jeDate.valText(that.valCell) == "" ? jeDate.nowDate({DD:0}) : start.maxDate;
        //     }, //设定最大日期为当前日期
        //     donefun: function(obj){
        //         end.minDate = obj.val; //开始日选好后，重置结束日的最小日期
        //         s = getdaysinmonth(jeDate.getLunar(obj.date[0]).cY,jeDate.getLunar(obj.date[0]).cM);
        //         m = s.yy;
        //         // jeDate("#EndTime",LinkageEndDate(false));
        //     }
        // });
        // // jeDate('#EndTime',LinkageEndDate);
        //
        // function LinkageEndDate(istg) {
        //     return {
        //         trigger : istg || "click",
        //         format: 'YYYY-MM-DD hh:mm:ss',
        //         minDate: function (that) {
        //             //that 指向实例对象
        //             var nowMinDate = jeDate.valText('#StartTime') == "" && jeDate.valText(that.valCell) == "";
        //             return nowMinDate ? jeDate.nowDate({DD:0}) : end.minDate ;
        //         }, //设定最小日期为当前日期
        //         maxDate: s.ss
        //         , //设定最大日期为当前日期
        //         donefun: function(obj){
        //             start.maxDate = obj.val; //将结束日的初始值设定为开始日的最大日期
        //             // s = getdaysinmonth(jeDate.getLunar(obj.date[0]).cY,jeDate.getLunar(obj.date[0]).cM);
        //
        //         }
        //     };
        // }

    //     var min=jeDate.nowDate({DD:0});
    //     var max=jeDate.nowDate({DD:0});
    //     jeDate("#StartTime",{
    //         trigger: "click",  //可绑定一个或多个事件
    //         minDate: '2016-06-16',
    //         maxDate: jeDate.nowDate({DD:0}),
    //         format:'YYYY-MM-DD hh:mm:ss',
    //         zIndex:3000,
    //         donefun: function (obj) {
    //             min = obj.val;
    //             max = getdaysinmonth(jeDate.getLunar(obj.date[0]).cY,jeDate.getLunar(obj.date[0]).cM);
    //             // $("#EndTime").val("");
    //             LinkageEndDate(min,max.ss);
    //         }
    //     });
    //
    //
    // function LinkageEndDate(s,e) {
    //
    //     alert(min);
    //     jeDate("#EndTime",{
    //         trigger: "click",  //可绑定一个或多个事件
    //         minDate: s,
    //         maxDate: e,
    //         format:'YYYY-MM-DD hh:mm:ss',
    //         zIndex:3000
    //     })
    // }
    //
    var max;
    jeDate('#StartTime',{
        theme:{bgcolor:"#4aa5ff",pnColor:"#00DDAA"},
        format: 'YYYY-MM-DD hh:mm:ss',
        minDate: '2014-01-01 00:00:00', //设定最小日期
        onClose:false,
        isinitVal:true,
        isClear:false,
        maxDate:function (that) {
            //that 指向实例对象
            var nowMaxDate = ""?jeDate.nowDate({DD:0}):$('#EndTime').val();
            return nowMaxDate
        }, //设定最大日期为当前日期
        donefun: function(obj){
            $('#EndTime').val(obj.val);
            max = getdaysinmonth(jeDate.getLunar(obj.date[0]).cY,jeDate.getLunar(obj.date[0]).cM);
            jeDate("#EndTime",LinkageEndDate(false));

        }
    });
    jeDate('#EndTime',LinkageEndDate);
    function LinkageEndDate(istg) {
        return {
            trigger : istg || "click",
            theme:{bgcolor:"#4aa5ff",pnColor:"#00DDAA"},
            format: 'YYYY-MM-DD hh:mm:ss',
            onClose:false,
            isinitVal:true,
            isClear:false,
            isToday:false,
            minDate: function (that) {
                var nowMinDate = $('#StartTime').val();
                return nowMinDate;
            }, //设定最小日期为当前日期
            maxDate:function (that) {
                var nowMaxDate = jeDate.valText('#StartTime') == "" ? jeDate.nowDate({DD:0}):max.ss;
                return nowMaxDate
            }//设定最大日期为当前日期
            // maxDate:max.ss
        };
    }

});
