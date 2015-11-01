
/*following is the common code for posting php arrays from UI in post arrays instead of json */
var StatsApp = angular.module('StatsApp', ["highcharts-ng", 'ngRoute', 'StatsControllers',
    "ngSanitize", "ngCsv"], function($httpProvider) {
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
});
/*@potluri multiple properties are shared across. some times ajax calls have been cached too with following code
 * its used in reportcontroller and logincontroller. search for sharedproperties in thos controllers.
 */
var sitedevlink = 'http://thunderify.com/statsactual/';
        //'http://localhost/xampp/spu/potluriUX.github.io/statsactual/';//'http://stats-dev.internal.digital.scholastic.com/newlogin';//
var str_window = window.location + " ";
//  alert(str_window.split("#")[0]);
StatsApp.service('sharedProperties', function() {
    var property = '';
    var productinfo_property = '';
    var usageinfo_property = '';
    var usageinfo_property2 = '';
    return {
        getProperty: function() {
            //  return property;

            //alert(str_windowsplit("#")[0]); // i am splitting because str will have 
            //http://stats-dev.internal.digital.scholastic.com/newlogin#login 
            //ala . so splitting by #
            if (str_window.split("#")[0] == sitedevlink)//if stats dev . 
                //below is for dev only return without groups. internal/stats account mary kurtz
                //      return {"resultcode":0,"result":{"customerid":"6000245100","customername":"MARY KURTZ","aggcode":"    ","haschildren":true,"hasgroups":false,"hasinstitutionalchildren":true,"hasmidtier":false,"children":{"6000245100":"    ","6000242300":"    ","6001994000":"    ","800067036":"    ","iauth1260":"","iauth1261":"","iauth1270":"","iauth1274":"","iauth1276":"","iauth1285":"","iauth1286":"","iauth1287":"","iauth1288":"","iauth1289":"","iauth1290":"","iauth1291":"","iauth1292":"","iauth1293":"","iauth1294":"","iauth1295":"","iauth1302":"","iauth1303":"","iauth1519":"","iauth1520":"","iauth1521":"","iauth1522":"","iauth1525":"","iauth1309":"","iauth1310":"","iauth1318":"","iauth1313":"","iauth1314":"","iauth1332":"","iauth1333":"","iauth1334":"","iauth1335":"","iauth1337":"","iauth1338":"","iauth1339":"","iauth1340":"","iauth1341":"","iauth1342":"","iauth1343":"","iauth1344":"","iauth1345":"","iauth1350":"","iauth1351":"","iauth1352":"","iauth1353":"","iauth1354":"","iauth1355":"","iauth1356":"","iauth1357":"","iauth1495":"","iauth1496":"","iauth1582":"","iauth1583":"","iauth1587":"","iauth1588":"","iauth1589":"","iauth1590":"","iauth1672":"","iauth1673":"","iauth1852":"","iauth1862":"","iauth1863":"","iauth2233":"","iauth1502":"","iauth1503":"","iauth195155":"","iauth195156":"","iauth195157":"","iauth195158":"","iauth195159":"","iauth195160":"","iauth195161":"","iauth195162":"","iauth195163":"","iauth196294":"","iauth1963":"","800073063":"    ","800073184":"    ","iauth101280":"","iauth101281":"","iauth1015":"","iauth1030":"","iauth1042":"","iauth1068":"","iauth1069":"","iauth1070":"","iauth1071":"","iauth1072":"","iauth1073":"","iauth1074":"","iauth1075":"","iauth1076":"","iauth1077":"","iauth1078":"","iauth1079":"","iauth1080":"","iauth1081":"","iauth1082":"","iauth1083":"","iauth1084":"","iauth1085":"","iauth1086":"","iauth1087":"","iauth1088":"","iauth1109":"","iauth1324":"","iauth1380":"","iauth1382":"","iauth1384":"","iauth1385":"","iauth1389":"","iauth1390":"","iauth1391":"","iauth1392":"","iauth1393":"","iauth1394":"","iauth1395":"","iauth1396":"","iauth1397":"","iauth1398":"","iauth1399":"","iauth1400":"","iauth1401":"","iauth1402":"","iauth1403":"","iauth1408":"","iauth1409":"","iauth1410":"","iauth1411":"","iauth1412":"","iauth1413":"","iauth1414":"","iauth1415":"","iauth1416":"","iauth1417":"","iauth1418":"","iauth1419":"","iauth1420":"","iauth1421":"","iauth1422":"","iauth1515":"","iauth1518":"","iauth1424":"","iauth1425":"","iauth1430":"","iauth1432":"","iauth1435":"","iauth1436":"","iauth1437":"","iauth1438":"","iauth1440":"","iauth1441":"","iauth1442":"","iauth1443":"","iauth1445":"","iauth1446":"","iauth1447":"","iauth1448":"","iauth1449":"","iauth1450":"","iauth1451":"","iauth1452":"","iauth1453":"","iauth1454":"","iauth1455":"","iauth1456":"","iauth1457":"","iauth1458":"","iauth1460":"","iauth1462":"","iauth1464":"","iauth1465":"","iauth1467":"","iauth1469":"","iauth1470":"","iauth1472":"","iauth1476":"","iauth1477":"","iauth1485":"","iauth1488":"","iauth1491":"","iauth1494":"","iauth1498":"","iauth1499":"","iauth1506":"","iauth1507":"","iauth1508":"","iauth1511":"","iauth1512":"","iauth1552":"","iauth1559":"","iauth1561":"","iauth1562":"","iauth1584":"","iauth159591":"","iauth1604":"","iauth1605":"","iauth1606":"","iauth1607":"","iauth1608":"","iauth1609":"","iauth1610":"","iauth1611":"","iauth1612":"","iauth1613":"","iauth1614":"","iauth1615":"","iauth1616":"","iauth1617":"","iauth1618":"","iauth1619":"","iauth1620":"","iauth1621":"","iauth1622":"","iauth1623":"","iauth1624":"","iauth1625":"","iauth1626":"","iauth1627":"","iauth1628":"","iauth1629":"","iauth1630":"","iauth1631":"","iauth1632":"","iauth1633":"","iauth1634":"","iauth1635":"","iauth1636":"","iauth1637":"","iauth1638":"","iauth1639":"","iauth1640":"","iauth1641":"","iauth2153":"","iauth1642":"","iauth1643":"","iauth1644":"","iauth1645":"","iauth1646":"","iauth1647":"","iauth1648":"","iauth1649":"","iauth1650":"","iauth1651":"","iauth1652":"","iauth1653":"","iauth1654":"","iauth1655":"","iauth1656":"","iauth1657":"","iauth1658":"","iauth1659":"","iauth1660":"","iauth1661":"","iauth1666":"","iauth1667":"","iauth1668":"","iauth1669":"","iauth1670":"","iauth1671":"","iauth1674":"","iauth1675":"","iauth1819":"","iauth1890":"","iauth1891":"","iauth1892":"","iauth1893":"","iauth1894":"","iauth1895":"","iauth1896":"","iauth1898":"","iauth1899":"","iauth1901":"","iauth1927":"","iauth1928":"","iauth193493":"","iauth194383":"","iauth194395":"","iauth194452":"","iauth196293":"","iauth196295":"","iauth196296":"","iauth196297":"","iauth196298":"","iauth196372":"","iauth196373":"","iauth196374":"","iauth196377":"","iauth196378":"","iauth196379":"","iauth196380":"","iauth196381":"","iauth196382":"","iauth196383":"","iauth196384":"","iauth196385":"","iauth196386":"","iauth196388":"","iauth196389":"","iauth196390":"","iauth196393":"","iauth2154":"","iauth2155":"","iauth2168":"","iauth2234":""},"groups":[],"products":["xs","tfx","vzama","vztfx","ereads","xsc","eto","fflix","bdflix","bkflix","bkflixi","bkflixs","bdport","xbk","sji","trackitsu"],"goproducts":["ea","gme","lp","ama","atb","nbk","nbps","nec","go"],"usagedates":{"2001-01-01":"January 2001","2001-02-01":"February 2001","2001-03-01":"March 2001","2001-04-01":"April 2001","2001-05-01":"May 2001","2001-06-01":"June 2001","2001-07-01":"July 2001","2001-08-01":"August 2001","2001-09-01":"September 2001","2001-10-01":"October 2001","2001-11-01":"November 2001","2001-12-01":"December 2001","2002-01-01":"January 2002","2002-02-01":"February 2002","2002-03-01":"March 2002","2002-04-01":"April 2002","2002-05-01":"May 2002","2002-06-01":"June 2002","2002-07-01":"July 2002","2002-08-01":"August 2002","2002-09-01":"September 2002","2002-10-01":"October 2002","2002-11-01":"November 2002","2002-12-01":"December 2002","2003-01-01":"January 2003","2003-02-01":"February 2003","2003-03-01":"March 2003","2003-04-01":"April 2003","2003-05-01":"May 2003","2003-06-01":"June 2003","2003-07-01":"July 2003","2003-08-01":"August 2003","2003-09-01":"September 2003","2003-10-01":"October 2003","2003-11-01":"November 2003","2003-12-01":"December 2003","2004-01-01":"January 2004","2004-02-01":"February 2004","2004-03-01":"March 2004","2004-04-01":"April 2004","2004-05-01":"May 2004","2004-06-01":"June 2004","2004-07-01":"July 2004","2004-08-01":"August 2004","2004-09-01":"September 2004","2004-10-01":"October 2004","2004-11-01":"November 2004","2004-12-01":"December 2004","2005-01-01":"January 2005","2005-02-01":"February 2005","2005-03-01":"March 2005","2005-04-01":"April 2005","2005-05-01":"May 2005","2005-06-01":"June 2005","2005-07-01":"July 2005","2005-08-01":"August 2005","2005-09-01":"September 2005","2005-10-01":"October 2005","2005-11-01":"November 2005","2005-12-01":"December 2005","2006-01-01":"January 2006","2006-02-01":"February 2006","2006-03-01":"March 2006","2006-04-01":"April 2006","2006-05-01":"May 2006","2006-06-01":"June 2006","2006-07-01":"July 2006","2006-08-01":"August 2006","2006-09-01":"September 2006","2006-10-01":"October 2006","2006-11-01":"November 2006","2006-12-01":"December 2006","2007-01-01":"January 2007","2007-02-01":"February 2007","2007-03-01":"March 2007","2007-04-01":"April 2007","2007-05-01":"May 2007","2007-06-01":"June 2007","2007-07-01":"July 2007","2007-08-01":"August 2007","2007-09-01":"September 2007","2007-10-01":"October 2007","2007-11-01":"November 2007","2007-12-01":"December 2007","2008-01-01":"January 2008","2008-02-01":"February 2008","2008-03-01":"March 2008","2008-04-01":"April 2008","2008-05-01":"May 2008","2008-06-01":"June 2008","2008-07-01":"July 2008","2008-08-01":"August 2008","2008-09-01":"September 2008","2008-10-01":"October 2008","2008-11-01":"November 2008","2008-12-01":"December 2008","2009-01-01":"January 2009","2009-02-01":"February 2009","2009-03-01":"March 2009","2009-04-01":"April 2009","2009-05-01":"May 2009","2009-06-01":"June 2009","2009-07-01":"July 2009","2009-08-01":"August 2009","2009-09-01":"September 2009","2009-10-01":"October 2009","2009-11-01":"November 2009","2009-12-01":"December 2009","2010-01-01":"January 2010","2010-02-01":"February 2010","2010-03-01":"March 2010","2010-04-01":"April 2010","2010-05-01":"May 2010","2010-06-01":"June 2010","2010-07-01":"July 2010","2010-08-01":"August 2010","2010-09-01":"September 2010","2010-10-01":"October 2010","2010-11-01":"November 2010","2010-12-01":"December 2010","2011-01-01":"January 2011","2011-02-01":"February 2011","2011-03-01":"March 2011","2011-04-01":"April 2011","2011-05-01":"May 2011","2011-06-01":"June 2011","2011-07-01":"July 2011","2011-08-01":"August 2011","2011-09-01":"September 2011","2011-10-01":"October 2011","2011-11-01":"November 2011","2011-12-01":"December 2011","2012-01-01":"January 2012","2012-02-01":"February 2012","2012-03-01":"March 2012","2012-04-01":"April 2012","2012-05-01":"May 2012","2012-06-01":"June 2012","2012-07-01":"July 2012","2012-08-01":"August 2012","2012-09-01":"September 2012","2012-10-01":"October 2012","2012-11-01":"November 2012","2012-12-01":"December 2012","2013-01-01":"January 2013","2013-02-01":"February 2013","2013-03-01":"March 2013","2013-04-01":"April 2013","2013-05-01":"May 2013","2013-06-01":"June 2013","2013-07-01":"July 2013","2013-08-01":"August 2013","2013-09-01":"September 2013","2013-10-01":"October 2013","2013-11-01":"November 2013","2013-12-01":"December 2013","2014-01-01":"January 2014","2014-02-01":"February 2014","2014-03-01":"March 2014","2014-04-01":"April 2014","2014-05-01":"May 2014","2014-06-01":"June 2014","2014-07-01":"July 2014","2014-08-01":"August 2014","2014-09-01":"September 2014","2014-10-01":"October 2014","2014-11-01":"November 2014","2014-12-01":"December 2014","2015-01-01":"January 2015","2015-02-01":"February 2015","2015-03-01":"March 2015","2015-04-01":"April 2015","2015-05-01":"May 2015","2015-06-01":"June 2015"}}};
                //below is for dev only return WITH groups. kyvl/kyvl account 
                //report page opens because of this even without logging in. 
                return {"resultcode": 0, "result": {"customerid": "800035572", "customername": "COUNCIL ON POSTSECONDARY ED  KYVL", "aggcode": "    ", "haschildren": true, "hasgroups": true, "hasinstitutionalchildren": true, "hasmidtier": false, "children": {"800035572": "    ", "1800000000": "kctcs", "1800000020": "    ", "1800000021": "    ", "1800000032": "public", "1800100100": "    ", "1800160100": "aikcu", "1800180100": "publib", "1800200100": "    ", "1800280100": "publib", "1800380100": "publib", "1800400100": "    ", "1800500300": "    ", "1800580100": "publib", "1800600100": "    ", "1800600103": "    ", "1800680100": "publib", "1800700100": "    ", "1800700300": "    ", "1800780100": "publib", "1800780200": "publib", "1800800100": "    ", "1800800200": "    ", "1800835400": "    ", "1800880100": "publib", "1800900100": "    ", "1800980100": "publib", "1801000100": "    ", "1801000200": "    ", "1801000400": "    ", "1801000506": "kctcs", "1801060100": "kctcs", "1801080100": "    ", "1801100100": "    ", "1801100107": "    ", "1801100200": "    ", "1801160100": "aikcu", "1801200200": "    ", "1801360100": "kctcs", "1801380200": "publib", "1801400100": "    ", "1801400200": "    ", "1801480100": "publib", "1801500100": "    ", "1801500102": "    ", "1801580100": "publib", "1801600100": "    ", "1801680100": "publib", "1801780100": "publib", "1801800100": "    ", "1801860100": "saalck", "1801880200": "publib", "1801900100": "    ", "1801900200": "    ", "1801900400": "    ", "1801900500": "    ", "1801900600": "    ", "1801960100": "saalck", "1801980400": "publib", "1802080100": "publib", "1802100100": "    ", "1802180100": "publib", "1802200100": "    ", "1802260100": "aikcu", "1802300100": "    ", "1802380100": "publib", "1802400100": "    ", "1802400108": "    ", "1802400110": "    ", "1802400120": "    ", "1802480100": "publib", "1802500100": "    ", "1802580100": "publib", "1802600100": "    ", "1802600118": "    ", "1802630100": "    ", "1802680100": "publib", "1802700200": "    ", "1802700201": "    ", "1802780100": "publib", "1802800100": "    ", "1802880100": "publib", "1802900100": "    ", "1802980100": "publib", "1803000100": "    ", "800073771": "    ", "1803000200": "    ", "1803035800": "indyk1", "1803060100": "aikcu", "1803060200": "aikcu", "1803080100": "publib", "1803180100": "publib", "1803300100": "    ", "1803300106": "    ", "1803380100": "publib", "1803400100": "    ", "1803400504": "kctcs", "1803430500": "    ", "1803460100": "specac", "1803460200": "aikcu", "1803460300": "saalck", "1803460500": "public", "1803480100": "publib", "1803500100": "    ", "1803580100": "publib", "1803600100": "    ", "1803660100": "kctcs", "1803680100": "publib", "1803700100": "    ", "1803700200": "    ", "1803760100": "saalck", "1803780200": "publib", "1803800200": "    ", "1803880300": "publib", "1803900100": "    ", "1803980100": "publib", "1804000100": "    ", "1804080100": "publib", "1804100100": "    ", "1804100200": "    ", "1804180100": "publib", "1804200100": "    ", "1804200200": "    ", "1804260100": "aikcu", "1804280100": "publib", "1804380100": "publib", "1804400100": "    ", "1804480100": "publib", "1804500300": "    ", "1804580100": "publib", "1804600100": "    ", "1804680100": "publib", "1804700100": "    ", "1804700200": "    ", "1804700205": "    ", "1804700407": "kctcs", "1804760100": "kctcs", "1804780100": "publib", "1804860100": "public", "1804880100": "publib", "1804980100": "publib", "1805000100": "    ", "1805080100": "publib", "1805100100": "    ", "1805160100": "kctcs", "1805180100": "publib", "1805200100": "    ", "1805200200": "    ", "1805280100": "publib", "1805300100": "    ", "1805380100": "publib", "1805460100": "kctcs", "1805500100": "    ", "1805580100": "publib", "1805600100": "    ", "1805600308": "kctcs", "1805630800": "indyk1", "1805632200": "    ", "1805637000": "indyk1", "1805640800": "    ", "1805641500": "    ", "1805660100": "aikcu", "1805660300": "specac", "1805660400": "aikcu", "1805660500": "saalck", "1805660600": "kctcs", "1805661000": "specac", "1805680100": "publib", "1805700100": "    ", "1805760100": "aikcu", "1805760200": "specac", "1805780300": "publib", "1805800100": "    ", "1805800300": "    ", "1805800307": "public", "800086052": "    ", "1805880100": "publib", "1805900100": "    ", "1805900102": "    ", "1805900300": "    ", "1805900301": "    ", "1805900305": "    ", "1805900400": "    ", "1805900412": "    ", "1805900500": "    ", "1805936200": "    ", "1805960200": "aikcu", "1805980100": "publib", "1806000100": "    ", "1806060100": "aikcu", "1806080100": "publib", "1806160100": "aikcu", "1806180100": "publib", "1806200100": "    ", "1806280100": "publib", "1806380100": "publib", "1806400100": "    ", "800080046": "    ", "1806480100": "publib", "1806500100": "    ", "1806580100": "publib", "1806680100": "publib", "1806780100": "publib", "1806800100": "    ", "1806880100": "publib", "1806900100": "    ", "1806980100": "publib", "1807100100": "    ", "1807180100": "publib", "1807280100": "publib", "1807300100": "    ", "1807400100": "    ", "1807480100": "publib", "1807500200": "    ", "1807600100": "    ", "1807600200": "    ", "1807630100": "    ", "1807660100": "aikcu", "1807660200": "saalck", "1807780100": "publib", "1807800200": "    ", "1807880100": "publib", "1807900200": "    ", "1807980100": "publib", "1808000100": "    ", "1808100100": "    ", "1808180100": "publib", "1808200100": "    ", "1808280100": "publib", "1808380100": "publib", "1808400100": "    ", "1808400300": "    ", "1808480100": "publib", "1808580200": "publib", "1808600100": "    ", "1808680100": "publib", "1808700100": "    ", "1808780100": "publib", "1808880100": "publib", "1808900300": "    ", "1808980300": "publib", "1809000200": "    ", "1809035400": "    ", "1809035500": "    ", "1809080100": "publib", "1809080101": "    ", "1809080104": "    ", "1809180100": "publib", "1809200100": "    ", "1809280100": "publib", "1809300100": "    ", "1809380100": "publib", "1809480100": "publib", "1809580100": "publib", "1809600200": "    ", "1809680100": "publib", "1809700100": "school", "1809700307": "public", "1809760100": "kctcs", "1809780100": "publib", "1809800100": "    ", "1809800200": "    ", "1809860100": "aikcu", "1809880300": "publib", "1809900100": "    ", "1809980100": "publib", "1810000200": "    ", "1810000400": "    ", "1810060100": "kctcs", "1810080100": "publib", "1810180100": "publib", "1810200200": "    ", "1810280100": "publib", "1810300100": "    ", "1810300205": "public", "1810360100": "saalck", "1810380100": "publib", "1810400100": "    ", "1810480100": "publib", "1810500200": "    ", "1810560100": "aikcu", "1810580100": "publib", "1810600100": "    ", "1810600109": "    ", "1810680100": "publib", "1810700100": "    ", "1810780100": "publib", "1810800100": "    ", "1810800101": "    ", "1810880100": "publib", "1810900200": "    ", "1810980100": "publib", "1811080100": "publib", "1811100100": "    ", "1811180100": "publib", "1811200100": "    ", "1811280100": "publib", "1811300100": "    ", "1811400200": "    ", "1811400400": "    ", "1811460100": "saalck", "1811480100": "publib", "1811500200": "    ", "1811560100": "aikcu", "1811580100": "publib", "1811600200": "    ", "800090614": "    ", "1811680100": "publib", "1811700300": "    ", "1811780100": "publib", "1811800300": "    ", "1811860100": "aikcu", "1811880100": "publib", "1811880200": "publib", "1811980200": "publib", "1812000200": "    ", "1812060100": "aikcu", "5200009000": "k12", "5200009234": "    ", "5200009295": "    ", "5200009301": "    ", "5200009336": "    ", "5200009500": "    ", "800044590": "prik12", "800080236": "    ", "800091879": "    ", "6000017300": "ga", "6000018400": "kctcs", "6000035900": "publib", "6000051600": "kctcs", "6000073400": "publib", "6000117100": "kctcs", "6000185900": "publib", "6000236900": "publib", "6000517600": "    ", "6000559200": "indyk1", "6000583000": "publib", "6000705200": "specac", "6000719800": "    ", "6000921700": "    ", "6001067900": "kctcs", "800000851": "aikcu", "800003940": "publib", "800019899": "school", "800023994": "    ", "800035573": "kctcs", "800035574": "specli", "800035584": "specli", "800035585": "ga", "800035586": "kctcs", "800035587": "kctcs", "800035588": "ga", "800035589": "ga", "800035590": "ga", "800035591": "ga", "800035599": "publib", "800035601": "public", "800035602": "ga", "800035609": "specac", "800035610": "specli", "800035613": "ga", "800035617": "specli", "800035618": "kctcs", "800035631": "kctcs", "800035634": "specia", "800035635": "specac", "800035637": "publib", "800035640": "specia", "800035641": "publib", "800035642": "specli", "800035643": "specli", "800035644": "ga", "800035645": "ga", "800035648": "ga", "800035650": "publib", "800037084": "specli", "800043047": "specli", "800044579": "    ", "800048334": "specli", "800049634": "kctcs", "800049635": "    ", "800049636": "    ", "800049637": "    ", "800049638": "    ", "800049639": "kde", "800049640": "    ", "800049641": "    ", "800052697": "    ", "800055343": "specli", "800055379": "    ", "800055380": "    ", "800055383": "    ", "800055384": "    ", "800055385": "    ", "800055386": "    ", "800055387": "    ", "800055389": "    ", "800055390": "    ", "800055391": "    ", "800055392": "    ", "800055393": "    ", "800055394": "    ", "800055395": "    ", "800055396": "    ", "800055397": "    ", "800055398": "    ", "800055401": "    ", "800055402": "    ", "800055403": "    ", "800055404": "    ", "800055902": "    ", "800055903": "ga", "800056085": "    ", "800062968": "    ", "800063105": "kctcs", "800063106": "    ", "800063107": "    ", "800063257": "kctcs", "800063258": "    ", "800063263": "    ", "800063268": "    ", "800063269": "    ", "800063270": "    ", "800077293": "    ", "800080982": "specac", "800080986": "specli", "800081659": "    ", "800084726": "    ", "800085431": "ezprox", "800085793": "    ", "800085869": "publib", "800086575": "    ", "800086577": "    ", "800087361": "    ", "800087622": "    ", "800089373": "    ", "800091106": "publib", "800091107": "    ", "800091108": "    ", "800091132": "    ", "800091133": "    ", "800091134": "    ", "800091135": "    ", "800091136": "    "}, "groups": ["kctcs", "public", "aikcu", "publib", "saalck", "indyk1", "specac", "school", "k12", "prik12", "ga", "specli", "specia", "kde", "ezprox"], "products": ["bdflix", "bkflix", "fflix", "sfx", "tfx", "xs", "trackitsu"], "goproducts": ["ama", "atb", "ea", "gme", "lp", "nbk", "nbps", "nec", "go"], "usagedates": {"2001-02-01": "Feb. 2001", "2001-03-01": "Mar. 2001", "2001-04-01": "Apr. 2001", "2001-05-01": "May. 2001", "2001-06-01": "Jun. 2001", "2001-07-01": "Jul. 2001", "2001-08-01": "Aug. 2001", "2001-09-01": "Sep. 2001", "2001-10-01": "Oct. 2001", "2001-11-01": "Nov. 2001", "2001-12-01": "Dec. 2001", "2002-01-01": "Jan. 2002", "2002-02-01": "Feb. 2002", "2002-03-01": "Mar. 2002", "2002-04-01": "Apr. 2002", "2002-05-01": "May. 2002", "2002-06-01": "Jun. 2002", "2002-07-01": "Jul. 2002", "2002-08-01": "Aug. 2002", "2002-09-01": "Sep. 2002", "2002-10-01": "Oct. 2002", "2002-11-01": "Nov. 2002", "2002-12-01": "Dec. 2002", "2003-01-01": "Jan. 2003", "2003-02-01": "Feb. 2003", "2003-03-01": "Mar. 2003", "2003-04-01": "Apr. 2003", "2003-05-01": "May. 2003", "2003-06-01": "Jun. 2003", "2003-07-01": "Jul. 2003", "2003-08-01": "Aug. 2003", "2003-09-01": "Sep. 2003", "2003-10-01": "Oct. 2003", "2003-11-01": "Nov. 2003", "2003-12-01": "Dec. 2003", "2004-01-01": "Jan. 2004", "2004-02-01": "Feb. 2004", "2004-03-01": "Mar. 2004", "2004-04-01": "Apr. 2004", "2004-05-01": "May. 2004", "2004-06-01": "Jun. 2004", "2004-07-01": "Jul. 2004", "2004-08-01": "Aug. 2004", "2004-09-01": "Sep. 2004", "2004-10-01": "Oct. 2004", "2004-11-01": "Nov. 2004", "2004-12-01": "Dec. 2004", "2005-01-01": "Jan. 2005", "2005-02-01": "Feb. 2005", "2005-03-01": "Mar. 2005", "2005-04-01": "Apr. 2005", "2005-05-01": "May. 2005", "2005-06-01": "Jun. 2005", "2005-07-01": "Jul. 2005", "2005-08-01": "Aug. 2005", "2005-09-01": "Sep. 2005", "2005-10-01": "Oct. 2005", "2005-11-01": "Nov. 2005", "2005-12-01": "Dec. 2005", "2006-01-01": "Jan. 2006", "2006-02-01": "Feb. 2006", "2006-03-01": "Mar. 2006", "2006-04-01": "Apr. 2006", "2006-05-01": "May. 2006", "2006-06-01": "Jun. 2006", "2006-07-01": "Jul. 2006", "2006-08-01": "Aug. 2006", "2006-09-01": "Sep. 2006", "2006-10-01": "Oct. 2006", "2006-11-01": "Nov. 2006", "2006-12-01": "Dec. 2006", "2007-01-01": "Jan. 2007", "2007-02-01": "Feb. 2007", "2007-03-01": "Mar. 2007", "2007-04-01": "Apr. 2007", "2007-05-01": "May. 2007", "2007-06-01": "Jun. 2007", "2007-07-01": "Jul. 2007", "2007-08-01": "Aug. 2007", "2007-09-01": "Sep. 2007", "2007-10-01": "Oct. 2007", "2007-11-01": "Nov. 2007", "2007-12-01": "Dec. 2007", "2008-01-01": "Jan. 2008", "2008-02-01": "Feb. 2008", "2008-03-01": "Mar. 2008", "2008-04-01": "Apr. 2008", "2008-05-01": "May. 2008", "2008-06-01": "Jun. 2008", "2008-07-01": "Jul. 2008", "2008-08-01": "Aug. 2008", "2008-09-01": "Sep. 2008", "2008-10-01": "Oct. 2008", "2008-11-01": "Nov. 2008", "2008-12-01": "Dec. 2008", "2009-01-01": "Jan. 2009", "2009-02-01": "Feb. 2009", "2009-03-01": "Mar. 2009", "2009-04-01": "Apr. 2009", "2009-05-01": "May. 2009", "2009-06-01": "Jun. 2009", "2009-07-01": "Jul. 2009", "2009-08-01": "Aug. 2009", "2009-09-01": "Sep. 2009", "2009-10-01": "Oct. 2009", "2009-11-01": "Nov. 2009", "2009-12-01": "Dec. 2009", "2010-01-01": "Jan. 2010", "2010-02-01": "Feb. 2010", "2010-03-01": "Mar. 2010", "2010-04-01": "Apr. 2010", "2010-05-01": "May. 2010", "2010-06-01": "Jun. 2010", "2010-07-01": "Jul. 2010", "2010-08-01": "Aug. 2010", "2010-09-01": "Sep. 2010", "2010-10-01": "Oct. 2010", "2010-11-01": "Nov. 2010", "2010-12-01": "Dec. 2010", "2011-01-01": "Jan. 2011", "2011-02-01": "Feb. 2011", "2011-03-01": "Mar. 2011", "2011-04-01": "Apr. 2011", "2011-05-01": "May. 2011", "2011-06-01": "Jun. 2011", "2011-07-01": "Jul. 2011", "2011-08-01": "Aug. 2011", "2011-09-01": "Sep. 2011", "2011-10-01": "Oct. 2011", "2011-11-01": "Nov. 2011", "2011-12-01": "Dec. 2011", "2012-01-01": "Jan. 2012", "2012-02-01": "Feb. 2012", "2012-03-01": "Mar. 2012", "2012-04-01": "Apr. 2012", "2012-05-01": "May. 2012", "2012-06-01": "Jun. 2012", "2012-07-01": "Jul. 2012", "2012-08-01": "Aug. 2012", "2012-09-01": "Sep. 2012", "2012-10-01": "Oct. 2012", "2012-11-01": "Nov. 2012", "2012-12-01": "Dec. 2012", "2013-01-01": "Jan. 2013", "2013-02-01": "Feb. 2013", "2013-03-01": "Mar. 2013", "2013-04-01": "Apr. 2013", "2013-05-01": "May. 2013", "2013-06-01": "Jun. 2013", "2013-07-01": "Jul. 2013", "2013-08-01": "Aug. 2013", "2013-09-01": "Sep. 2013", "2013-10-01": "Oct. 2013", "2013-11-01": "Nov. 2013", "2013-12-01": "Dec. 2013", "2014-01-01": "Jan. 2014", "2014-02-01": "Feb. 2014", "2014-03-01": "Mar. 2014", "2014-04-01": "Apr. 2014", "2014-05-01": "May. 2014", "2014-06-01": "Jun. 2014", "2014-07-01": "Jul. 2014", "2014-08-01": "Aug. 2014", "2014-09-01": "Sep. 2014", "2014-10-01": "Oct. 2014", "2014-11-01": "Nov. 2014", "2014-12-01": "Dec. 2014", "2015-01-01": "Jan. 2015", "2015-02-01": "Feb. 2015", "2015-03-01": "Mar. 2015", "2015-04-01": "Apr. 2015", "2015-05-01": "May. 2015", "2015-06-01": "Jun. 2015", "2015-07-01": "Jul. 2015", "2015-08-01": "Aug. 2015"}}};
            else
                return property;
        },
        setProperty: function(value) {
            property = value;

        },
        set_productinfo_property: function(value) {
            productinfo_property = value;//sets the product_info from the ajax call in report controller.js.

        },
        get_productinfo_property: function() {//we can HARDCODE the product array beneath to work without db.
            if (str_window.split("#")[0] == sitedevlink)//if stats dev .
                return {"ama": "Amazing Animals", "atb": "America the Beautiful", "bdflix": "Big Day BookFlix", "bdport": "Big Day for PreK", "bkflix": "BookFlix", "bkflixg": "BookFlix Gold", "bkflixi": "BookFlix International", "bkflixs": "BookFlix Spanish", "bkwwaunz": "BookFlix WorldWide - Australia\/New Zealand", "bkwwca": "BookFlix WorldWide - Canada", "bkwweur": "BookFlix WorldWide - Europe", "bkwwlam": "BookFlix WorldWide - Latin America", "bkwwmea": "BookFlix WorldWide - Middle East", "bkwwnas": "BookFlix WorldWide - North Asia", "bkwwsas": "BookFlix WorldWide - South Asia", "bkwwuk": "BookFlix WorldWide - United Kingdom", "bkwwus": "BookFlix WorldWide - United States", "caho": "CAHO Online Service", "cclicks": "Core Clicks", "cclicks1": "Core Clicks Grade 1", "cclicks2": "Core Clicks Grade 2", "cclicks3": "Core Clicks Grade 3", "cclicks4": "Core Clicks Grade 4", "cclicks5": "Core Clicks Grade 5", "cclicksk": "Core Clicks Kindergarten", "clffx": "Classroom FreedomFlix", "clnbk": "Classroom New Book of Knowledge", "clsfx": "Classroom ScienceFlix", "cltfx": "Classroom TrueFlix", "custportal": "Customer Portal", "ea": "Encyclopedia Americana", "ereads": "READ 180 eReads", "eto": "Expert 21", "fflix": "FreedomFlix", "gme": "Grolier Multimedia Encyclopedia", "gmei": "GME Incanta", "go": "Grolier Online", "godl": "GO Digital Locker", "iiia": "Info in Action", "iira3": "Independent Reading Assessment: Fiction 3", "iira4": "Independent Reading Assessment: Fiction 4", "iira5": "Independent Reading Assessment: Fiction 5", "iiranf3": "Independent Reading Assessment: Non-Fiction 3", "iiranf4": "Independent Reading Assessment: Non-Fiction 4", "iiranf5": "Independent Reading Assessment: Non-Fiction 5", "lcltl": "Localization Tool", "lp": "Lands and Peoples", "nbk": "New Book of Knowledge", "nbkh": "New Book of Knowledge Home Edition", "nbps": "New Book of Popular Science", "nec": "Nueva Enciclopedia Cumbre", "nsgra36": "Next Step Guided Reading Assessment - Grades 3-6", "nsgrak2": "Next Step Guided Reading Assessment - Grades K-2", "r180s": "Read 180 Stretch", "ra": "Read About", "read": "Read 180", "sfx": "ScienceFlix", "sfxwwca": "ScienceFlix WorldWide - Canada", "sji": "Study Jams", "slpshowcase": "SLP Showcase", "tfwwaunz": "TrueFlix WorldWide - Australia\/New Zealand", "tfwwca": "TrueFlix WorldWide - Canada", "tfwweur": "TrueFlix WorldWide - Europe", "tfwwlam": "TrueFlix WorldWide - Latin America", "tfwwmea": "TrueFlix WorldWide - Middle East", "tfwwnas": "TrueFlix WorldWide - North Asia", "tfwwsas": "TrueFlix WorldWide - South Asia", "tfwwuk": "TrueFlix WorldWide - United Kingdom", "tfwwus": "TrueFlix WorldWide - United States", "tfx": "TrueFlix", "trackit": "Track It", "trackitsu": "Track It Summer", "trackityr": "Track It Year-round", "vpgreview": "VPG Asset Review Portal", "vzama": "Verizon Amazing Animals", "vznbk": "Verizon New Book of Knowledge", "vztfx": "Verizon TrueFlix", "xbk": "xBooks", "xs": "Expert Space", "xsc": "Expert Space Canada"};
            else
                return productinfo_property;//gets the product_info from the ajax call in report controller.js.
        },
        set_usageinfo_property: function(value) {
            usageinfo_property = value;//sets the product_info from the ajax call in report controller.js.

        },
        get_usageinfo_property: function() {//we can HARDCODE the product array beneath to work without db.
            var str = window.location + " ";
            if (str_window.split("#")[0] == sitedevlink)//if stats dev . 
                return {"resultcode": 0, "result": {"2008-09-01": {"onsite": {"documents": 217, "sessions": 67, "searches": 0}, "remote": {"documents": 5000, "sessions": 807, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2008-10-01": {"onsite": {"documents": 114, "sessions": 27, "searches": 0}, "remote": {"documents": 3172, "sessions": 599, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2008-11-01": {"onsite": {"documents": 258, "sessions": 64, "searches": 0}, "remote": {"documents": 7947, "sessions": 1340, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2008-12-01": {"onsite": {"documents": 100, "sessions": 25, "searches": 0}, "remote": {"documents": 4057, "sessions": 594, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-01-01": {"onsite": {"documents": 83, "sessions": 29, "searches": 0}, "remote": {"documents": 4169, "sessions": 661, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-02-01": {"onsite": {"documents": 346, "sessions": 104, "searches": 0}, "remote": {"documents": 4026, "sessions": 605, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-03-01": {"onsite": {"documents": 198, "sessions": 62, "searches": 0}, "remote": {"documents": 4059, "sessions": 628, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-04-01": {"onsite": {"documents": 601, "sessions": 170, "searches": 0}, "remote": {"documents": 4187, "sessions": 689, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-05-01": {"onsite": {"documents": 1076, "sessions": 359, "searches": 0}, "remote": {"documents": 5703, "sessions": 946, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-06-01": {"onsite": {"documents": 1041, "sessions": 345, "searches": 0}, "remote": {"documents": 872, "sessions": 172, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-07-01": {"onsite": {"documents": 665, "sessions": 182, "searches": 0}, "remote": {"documents": 618, "sessions": 140, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-08-01": {"onsite": {"documents": 461, "sessions": 152, "searches": 0}, "remote": {"documents": 3192, "sessions": 591, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-09-01": {"onsite": {"documents": 608, "sessions": 204, "searches": 0}, "remote": {"documents": 5553, "sessions": 1043, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-10-01": {"onsite": {"documents": 1210, "sessions": 363, "searches": 0}, "remote": {"documents": 8209, "sessions": 2424, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-11-01": {"onsite": {"documents": 1073, "sessions": 274, "searches": 0}, "remote": {"documents": 7575, "sessions": 1275, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}}};
            else
                return usageinfo_property;//gets the product_info from the ajax call in report controller.js.
        },
        set_usageinfo_property2: function(value) {
            usageinfo_property2 = value;//sets the product_info from the ajax call in report controller.js.

        },
        get_usageinfo_property2: function() {//we can HARDCODE the product array beneath to work without db.
            var str = window.location + " ";
            if (str_window.split("#")[0] == sitedevlink)//if stats dev . 
                return {"resultcode": 0, "result": {"2008-09-01": {"onsite": {"documents": 217, "sessions": 67, "searches": 0}, "remote": {"documents": 5000, "sessions": 807, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2008-10-01": {"onsite": {"documents": 114, "sessions": 27, "searches": 0}, "remote": {"documents": 3172, "sessions": 599, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2008-11-01": {"onsite": {"documents": 258, "sessions": 64, "searches": 0}, "remote": {"documents": 7947, "sessions": 1340, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2008-12-01": {"onsite": {"documents": 100, "sessions": 25, "searches": 0}, "remote": {"documents": 4057, "sessions": 594, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-01-01": {"onsite": {"documents": 83, "sessions": 29, "searches": 0}, "remote": {"documents": 4169, "sessions": 661, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-02-01": {"onsite": {"documents": 346, "sessions": 104, "searches": 0}, "remote": {"documents": 4026, "sessions": 605, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-03-01": {"onsite": {"documents": 198, "sessions": 62, "searches": 0}, "remote": {"documents": 4059, "sessions": 628, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-04-01": {"onsite": {"documents": 601, "sessions": 170, "searches": 0}, "remote": {"documents": 4187, "sessions": 689, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-05-01": {"onsite": {"documents": 1076, "sessions": 359, "searches": 0}, "remote": {"documents": 5703, "sessions": 946, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-06-01": {"onsite": {"documents": 1041, "sessions": 345, "searches": 0}, "remote": {"documents": 872, "sessions": 172, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-07-01": {"onsite": {"documents": 665, "sessions": 182, "searches": 0}, "remote": {"documents": 618, "sessions": 140, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-08-01": {"onsite": {"documents": 461, "sessions": 152, "searches": 0}, "remote": {"documents": 3192, "sessions": 591, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-09-01": {"onsite": {"documents": 608, "sessions": 204, "searches": 0}, "remote": {"documents": 5553, "sessions": 1043, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-10-01": {"onsite": {"documents": 1210, "sessions": 363, "searches": 0}, "remote": {"documents": 8209, "sessions": 2424, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}, "2009-11-01": {"onsite": {"documents": 1073, "sessions": 274, "searches": 0}, "remote": {"documents": 7575, "sessions": 1275, "searches": 0}, "individual": {"documents": 0, "sessions": 0, "searches": 0}}}};
            else
                return usageinfo_property2;//gets the product_info from the ajax call in report controller.js.
        }
    };
});
//once the create report button is pressed we call this service for posted properties. this could have been put in shared 
//properties service above like how we put product_info into the service above. 
StatsApp.service('post_to_chart_properties', function() {
    var property = '';
    var prod_title= '';

    return {
        getProperty: function() {
            var str = window.location + " ";
            if (str_window.split("#")[0] == sitedevlink)//if stats dev . 
                return {"rpt_type": "OUS", "year": "2010-02-01", "prodfamily": "bkflix", "radioincludesites": "yes"}
            else
                return property;
        },
        setProperty: function(value) {
            property = value;

        },
        setTitle:function(value){
            prod_title = value;
        },
        getTitle:function(){
            return prod_title;
        },
        set_chart_config : function($scope, month_dates_x_axis_actual_on_graph, color){
//                console.log( encodeURIComponent(JSON.stringify({0:$scope.documents_total_y_axis, 1:$scope.sessions_total_y_axis, 
//                      2:$scope.searches_total_y_axis,3:month_dates_x_axis_actual_on_graph, 4:color })));
           return { options: {
                chart: {
                    type: 'column',
//                    inverted: true
                },
                title: {
                    text: 'Total Usage'
                },
                subtitle: {
//            text: 'Source: WorldClimate.com'
                },
                xAxis: {
//                    categories: [
//                        'Jan',
//                        'Feb',
//                        'Mar',
//                        'Apr',
//                        'May',
//                        'Jun',
//                        'Jul',
//                        'Aug',
//                        'Sep',
//                        'Oct',
//                        'Nov',
//                        'Dec'
//                    ],
                    categories: month_dates_x_axis_actual_on_graph,
                    crosshair: true,
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Overall Usage'
                    },
                    plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }],
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true,
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 2,
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
            },
            series: [
                //below is two objects element array  year over year usage report hardcoded trying to create 
                {
                    name: 'Documents',
                    data: $scope.documents_total_y_axis, //[50000, 71500, 106400, 129200, 144.0, 176000, 13500, 148500, 216400, 105.0, 104300, 91200],
                    // data : [],
                    color: color[0],
                    index:0
//    pointPadding: 0.5,
//     dataLabels: {
//                    enabled: true,
//                    align: 'right',
//                    color: '#FFFFFF',
//                    x: 20,
//                    y: -80,
//                    allowOverlap : true,
////                      format: "{point.y} K",
//                       formatter: function () {
//        return Highcharts.numberFormat(this.y,0);
//    }
//                },

                },
                  {
                    name: 'Sessions',
                    data: $scope.sessions_total_y_axis, //[84500, 78800, 98500, 93400, 106000, 84500, 105.0, 104300, 91200, 13500, 148500, 216400],
                    //  data : [],
// ,pointPadding: .01,
//  dataLabels: {
//                    enabled: true,
//                    align: 'right',
                    color: color[2],
                    index:1
//                    y: -10,
//                      format: this.y,
//                },
                },
                {
                    name: 'Searches',
                    data: $scope.searches_total_y_axis, //[84500, 78800, 98500, 93400, 106000, 84500, 105.0, 104300, 91200, 13500, 148500, 216400],
                    //  data : [],
// ,pointPadding: .01,
//  dataLabels: {
//                    enabled: true,
//                    align: 'right',
                    color: color[1],
                    index:2
//                    y: -10,
//                      format: this.y,
//                },
                }
              

            ],
            title: {
                text: 'Total Usage'
            },
            loading: false,
             credits: {
      enabled: false
  }
        }
    
            
        }
    }
});


StatsApp.factory('usageSummary', ['$http', '$location',
    function($http, $location)//added new
    {

        return {
            usageinfo: function(cuid, startDate, endDate, product, customer) {
                return $http({
                    url: "/reportdata",
                    method: "POST",
                    data: {
                        "request": "usageSummary",
                        "cuid": cuid,
                        'startDate': startDate,
                        'endDate': endDate,
                        'product': product,
                        'customer': customer
                                //                                    ['800067036', '800073063','800073184','6000242300','6000245100','6001994000',		
                                //		
                                //                                        'iauth101280',	'iauth101281','iauth1015','iauth1030','iauth1042',		
                                //		
                                //                                        'iauth1068','iauth1069','iauth1070'		]


                                //                'p3':{'key1':'asdf','key2' : 'objects'},
                                //                'p4':['1','2','onlyarraywith3elements'],
                                //                'p5':[{'key1':'asdf'}, {'key2' : 'objects'}],
                                //                'p6' : [{'key1':'asdf','key2' : 'objects'}]
                    }
                })
            }

        }
    }
]);
StatsApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/report', {
                    templateUrl: 'partials/report/report.php',
                    controller: 'ReportController',
                    resolve: {
                        auth: ["$q", "sharedProperties", '$location', function($q, sharedProperties, $location) {

                                ;

                                if (sharedProperties.getProperty()) {
                                    $location.path('/report');
                                } else {
                                    $location.path('/new');
                                }
                            }]
                    }
                }).when('/report_backup', {
            templateUrl: 'partials/includes/report_backup.html',
            controller: 'ReportController'

        }).when('/chart/:graph_data_passed_in_url', {
                        templateUrl: 'partials/chart/chart.php',
                        controller: 'ChartController'
                
                    }).
                when('/chart', {
                    templateUrl: 'partials/chart/chart.php',
                    controller: 'ChartController',
                    resolve: {
                        auth: ["$q", "post_to_chart_properties", '$location', function($q, post_to_chart_properties, $location) {



                                if (post_to_chart_properties.getProperty()) {
                                    $location.path('/chart');
                                } else {
                                    $location.path('/new');
                                }
                            }]
                    }
                }).


                when('/test', {
                    templateUrl: 'partials/test/test.php',
                    controller: 'TestController'
                }).
                when('/loading', {
                    templateUrl: 'partials/test/loading.html',
                }).
                when('/report_yoy', {
                    templateUrl: 'partials/test/report-YoY.php',
                }).
                when('/help', {
                    templateUrl: 'partials/includes/help.php',
                    controller: 'POCController'
                }).
                when('/poc', {
                    templateUrl: 'partials/poc/poc.php',
                    controller: 'POCController'
                }).
                when('/new', {//new controller adding route first.
                    // data\stats3\scripts\javascript\stats3\statsrep5\js\app.js//js somewhere else. 
                    // anguitar used to have same place. 
                    // data\stats3\scripts\php\stats3\common\statsrep5.0\index.html
                    // data\stats3\scripts\php\stats3\common\statsrep5.0\partials\newlogin.html
                    // data\stats3\docs\remote\ang\styles.css//css is here. images also. 4 paths. understood
                    //above three are paths to javascript, html, partials. 
                    templateUrl: 'partials/login/newlogin.php', //new page. add controller now. controller already thr akda pee ella sghow me
                    controller: 'LoginController' //is there a partial.so its there. thats y follow the above paths.
                }).
                otherwise({
                    redirectTo: '/new'
                });
    }]);