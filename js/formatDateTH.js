/**
 * Created by tanarin.kh on 16/2/2561.
 */

function formatDateTime(sDate,FormatType) {
    var formatDate=null;
    var month = new Array(12);
    month[0] = "เธก.เธ.";
    month[1] = "เธ.เธ.";
    month[2] = "เธกเธต.เธ.";
    month[3] = "เน€เธก.เธข.";
    month[4] = "เธ.เธ.";
    month[5] = "เธกเธด.เธข.";
    month[6] = "เธ.เธ.";
    month[7] = "เธช.เธ.";
    month[8] = "เธ.เธข.";
    month[9] = "เธ•.เธ.";
    month[10] = "เธ.เธข.";
    month[11] = "เธ.เธ.";

    if(sDate) {
        if(FormatType==0){

            var ymdt = sDate.split('-');
            var dt = ymdt[2].split('T')

            var yyyy = ymdt[0] * 1;
            var mo = ymdt[1] * 1;
            var dd = dt[0];
            var hhmm = dt[1].split(':');
            var hh = hhmm[0];
            var mm = hhmm[1];
            formatDate = dd + " " + month[mo-1] + " " + (yyyy + 543) + " " + hh+':'+mm;
        }else if(FormatType==1){
            var ymdt = sDate.split('-');
            var dt = ymdt[2].split(' ')

            var yyyy = ymdt[0] * 1;
            var mo = ymdt[1] * 1;
            var dd = dt[0];
            var hhmm = dt[1].split(':');
            var hh = hhmm[0];
            var mm = hhmm[1];
            formatDate = dd + " " + month[mo-1] + " " + (yyyy + 543) + " " + hh+':'+mm;
        }else{
            var ymdt = sDate.split('-');

            var yyyy = ymdt[0] * 1;
            var mo = ymdt[1] * 1;
            var dd = ymdt[2];
            formatDate = dd + " " + month[mo-1] + " " + (yyyy + 543) ;

        }

        return formatDate;
    }

}