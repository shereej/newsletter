var fs = require('fs');
var pretty = require('pretty');
var path = require("path");
var multer = require('multer');
var Jimp = require("jimp");

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var http = require('http').Server(app);
const port = process.env.PORT || 8001;
const fileUpload = require('express-fileupload');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './dist/images/bday');
  },
  filename: function (req, file, callback) {
    //console.log(file.originalname);
    callback(null, file.originalname);
  }
});
var upload = multer({ storage : storage }).array('userPhoto',10);
var upload2 = multer({ storage : storage }).array('userPhoto2',10);

var bdayinfo;
var bdayfiles;
var anivinfo;
var anivfiles;

app.post('/api/anvi/photo',function(req,res){
    upload2(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        anivinfo = req.body;
        anivfiles = req.files;
        res.end("File is uploaded");
    });
});

app.post('/api/bday/photo',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        bdayinfo = req.body;
        bdayfiles = req.files;
        res.end("File is uploaded");
    });
});
var fileName = './dist/newsletter.html';
//var stream = fs.createWriteStream(fileName);
//default configuration
var docTitle = '', 
    headerImage = '',
    bnBrColr = '',
    buTopColr = '',
    bubgImage = '',
    bupbgImage = '',
    pbgImage = '',
    psbgImage = '',
    tnbgImage = '',
    htbgImage = '',
    tsbgImage = '',
    b_title = '',
    b_date = ''
    b_data = '',
    b_author = '',
    butxtColor = '',
    bubgcolor = '',
    bup_Txtcolor = '',
    bup_topBrdColr = '',
    bup_Title = '',
    opp_Title = '',
    achv_Title = '',
    bup_bgcolor = '',
    bup_data = '',
    opp_data = '',
    achv_data = '',
    plan_data = '',
    pTxtColr = '',
    pTBColr = '',
    pTitle = '',
    pbgcolor = '',
    psbgcolor = '',
    psTxtColr = '',
    psTBColr = '',
    psTitle = '',
    psDfa = '',
    psAttrition = '',
    psmulti = '',
    tnbgcolor = '',
    tnTxtColr = '',
    tnTBColr = '',
    tnTitle = '',
    tnAuthor = '',
    tn_data = '',
    htbgcolor = '',
    htTxtColr = '',
    htTBColr = '',
    htTitle = '',
    ht_data = '',
    tsTBColr = '',
    bdTxtColr = '',
    bdTBColr = '',
    bdbgcolor = '',
    ftbgcolor = '',
    ftTxtColr = '',
    ftEmail = '',
    ftCncpt = '',
    ftExecn = '';

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});

app.use(fileUpload());

app.get('/newsletter', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use('/preview', function(req,res){
    res.sendFile(path.join(__dirname, '../dist', 'newsletter.html'));
})



    var html = '';
    app.post('/postform', function(req, res) {
        //console.log(req.body);
        docTitle = req.body.title,
        butxtColor = req.body.butxtcolor,
        bnBrColr = req.body.bnrtopclr,
        buTopColr = req.body.butopclr,    
        bubgcolor = req.body.bubgcolor,    
        b_title = req.body.btitle,
        b_date = req.body.bdate,
        b_data = req.body.bdata,
        b_author = req.body.bauthor,        
        bup_Txtcolor = req.body.buptxtcolr,
        bup_topBrdColr = req.body.butbcolr,
        bup_Title = req.body.buptitle,
        opp_Title = req.body.opptitle,
        achv_Title = req.body.achvtitle,
        bup_bgcolor = req.body.bupbgcolor,
        bup_data = req.body.bupdata,
        opp_data = req.body.oppdata,
        achv_data = req.body.achvdata,
        plan_data = req.body.plandata,
        pTxtColr = req.body.ptxtcolor,
        pTBColr = req.body.pbrdcolor,
        pTitle = req.body.ptitle,
        pbgcolor = req.body.pbgcolor,        
        psbgcolor = req.body.psbgcolor,
        psTxtColr = req.body.pstxtcolr,
        psTBColr = req.body.pstbcolor,
        psTitle = req.body.pstitle,
        psDfa = req.body.psdfa,
        psAttrition = req.body.psattrition,
        psmulti = req.body.pslist,
        tnbgcolor = req.body.tnbgcolor,
        tnTxtColr = req.body.tntxtcolor,
        tnTBColr = req.body.tntbcolor,
        tnTitle = req.body.tntitle,
        tnAuthor = req.body.thauthor,
        tn_data = req.body.tndata,
        htbgcolor = req.body.htbgcolor,
        htTxtColr = req.body.httxtcolor,
        htTBColr = req.body.httbcolor,
        htTitle = req.body.httitle,
        ht_data = req.body.htdata,
        tsTBColr = req.body.tstbcolor,
        bdTxtColr = req.body.bdtxtcolor,
        bdTBColr = req.body.bdtbcolor,
        bdbgcolor = req.body.bdbgcolor,
        ftbgcolor = req.body.ftbgcolr,
        ftTxtColr = req.body.fttxtcolr,
        ftEmail = req.body.ftemail,
        ftCncpt = req.body.ftconcpt,
        ftExecn = req.body.ftexecu;

        /**
         *      Footer
         */
        if(ftbgcolor)
        ftbgcolor = 'background-color:'+ftbgcolor+';';
        else
        ftbgcolor = 'background-color:none;';

        if(ftTxtColr)
        ftTxtColr = 'color:'+ftTxtColr+';';
        else
        ftTxtColr = 'color: black;';

        
        /**
         * Birthday and Anniversary
         * 
         */
        if(bdTBColr)
        bdTBColr = 'background-color:'+bdTBColr+';';
        else
        bdTBColr = 'background-color:none;';

        if(bdTxtColr)
        bdTxtColr = 'color:'+bdTxtColr+';';
        else
        bdTxtColr = 'color: black;';

        if(bdbgcolor)
        bdbgcolor = 'background-color:'+bdbgcolor+';';
        else
        bdbgcolor = 'background-color:none;';

        /**
         * Team Image
         */

        if(tsTBColr)
        tsTBColr = 'background-color:'+tsTBColr+';';
        else
        tsTBColr = 'background-color:none;';


        /**
         * Health Tips
         *  
         */

        if(htTxtColr)
        htTxtColr = 'color:'+htTxtColr+';';
        else
        htTxtColr = 'color: black;';

        if(htTBColr)
        htTBColr = 'background-color:'+htTBColr+';';
        else
        htTBColr = 'background-color:none;';

        if(htbgcolor)
        htbgcolor = 'background-color:'+htbgcolor+';';
        else
        htbgcolor = 'background-color:none;';

        /**
         * Technical Newsletter         *      
         */

        if(tnTxtColr)
        tnTxtColr = 'color:'+tnTxtColr+';';
        else
        tnTxtColr = 'color: black;';

        if(tnbgcolor)
        tnbgcolor = 'background-color:'+tnbgcolor+';';
        else
        tnbgcolor = 'background-color:none;';

        if(tnTBColr)
        tnTBColr = 'background-color:'+tnTBColr+';';
        else
        tnTBColr = 'background-color:none;';


        /**
         * Project Statistics
         */
        if(psTxtColr)
        psTxtColr = 'color:'+psTxtColr+';';
        else
        psTxtColr = 'color: black;';

        if(psbgcolor)
        psbgcolor = 'background-color:'+psbgcolor+';';
        else
        psbgcolor = 'background-color:none;';

        if(psTBColr)
        psTBColr = 'background-color:'+psTBColr+';';
        else
        psTBColr = 'background-color:none;';

        /**
         * Banner Border
         */
        if(bnBrColr)
        bnBrColr = 'background-color:'+bnBrColr+';';
        else
        bnBrColr = 'background-color:none;';

        /*****
         * Business Artcile
         */

        if(butxtColor)
        butxtColor = 'color:'+butxtColor+';';
        else
        butxtColor = 'color: black;';        

        if(buTopColr)
        buTopColr = 'background-color:'+buTopColr+';';
        else
        buTopColr = 'background-color: none;';
        
        if(bubgcolor)
        bubgcolor = 'background-color:'+bubgcolor+';';
        else
        bubgcolor = 'background-color: none;';

        /**
         * Business Updates
         */
        if(bup_Txtcolor)
        bup_Txtcolor = 'color:'+bup_Txtcolor+';';
        else
        bup_Txtcolor = 'color: black;';

        if(bup_topBrdColr)
        bup_topBrdColr = 'background-color:'+bup_topBrdColr+';';
        else
        bup_topBrdColr = 'background-color: none;';

        if(bup_bgcolor)
        bup_bgcolor = 'background-color:'+bup_bgcolor+';';
        else
        bup_bgcolor = 'background-color: none;';

        /**
         * 
         */
        if(pTxtColr)
        pTxtColr = 'color:'+pTxtColr+';';
        else
        pTxtColr = 'color: black;';

        if(pTBColr)
        pTBColr = 'background-color:'+pTBColr+';';
        else
        pTBColr = 'background-color: none;';

        if(pbgcolor)
        pbgcolor = 'background-color:'+pbgcolor+';';
        else
        pbgcolor = 'background-color: none;';

        //call buildhtml and store it in html variable
        html = buildHtml(); 
        fs.writeFile(fileName, html, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        res.end('Data received');
    });
    
//});



//upload file
app.post('/uploadimage', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
  let defaultpath = './dist/images/';

  let headerfile = req.files.headerfile;
  let bubgfile = req.files.bubgfile;
  let bupbgfile = req.files.bupbgfile;
  let pbgfile = req.files.pbgfile;
  let psbgfile = req.files.psbgfile;
  let tnbgfile = req.files.tnbgfile;
  let htbgfile = req.files.htbgfile;
  let tsbgfile = req.files.tsbgfile;

//set opacity for the uploading bg images
let opacityVal = 0.1;
  
  //uploading team image
  if(tsbgfile){
    tsbgImage = tsbgfile.name;
    //console.log(tsbgfile.name);
    let tsbgfp = defaultpath+tsbgImage;
    tsbgfile.mv(tsbgfp, function(err) {
     if (err)
       return res.status(500).send(err);
     res.end("File is uploaded");     
    });
  }

    

  //uploading health tips bg image
  if(htbgfile){
    htbgImage = htbgfile.name;
    //console.log(htbgfile.name);
    let htbgfp = defaultpath+htbgImage;
    htbgfile.mv(htbgfp, function(err) {
     if (err)
       return res.status(500).send(err);
     res.end("File is uploaded");     
    });
    if(htbgfp.indexOf('.png')!=-1){    
        Jimp.read(htbgfp).then(function (img) {
                return img.opacity(opacityVal)
                .write(htbgfp); // save
        }).catch(function (err) {
            console.error(err);
        });
    }
  }

  //uploading tech news bg image
  if(tnbgfile){
    tnbgImage = tnbgfile.name;
    //console.log(tnbgfile.name);
    let tnbgfp = defaultpath+tnbgImage;
    tnbgfile.mv(tnbgfp, function(err) {
     if (err)
       return res.status(500).send(err);
     res.end("File is uploaded");     
    });
    if(tnbgfp.indexOf('.png')!=-1){  
    Jimp.read(tnbgfp).then(function (img) {
            return img.fade(opacityVal)
                .write(tnbgfp); // save
    }).catch(function (err) {
        console.error(err);
    });
    }
  }
  //uploading header image
  if(headerfile){
    headerImage = headerfile.name;
    //console.log(headerfile.name);
    let headerfp = defaultpath+headerImage;
    headerfile.mv(headerfp, function(err) {
     if (err)
       return res.status(500).send(err);
     res.end("File is uploaded");     
    });
  }
  //uploading Business artcile bg image
  if(bubgfile){
    bubgImage = bubgfile.name;
    //console.log(bubgfile.name);
    let bubgfp = defaultpath+bubgImage;
    bubgfile.mv(bubgfp, function(err) {
     if (err)
       return res.status(500).send(err);
     res.end("File is uploaded");     
   });
   if(bubgfp.indexOf('.png')!=-1){ 
   Jimp.read(bubgfp).then(function (img) {
            return img.fade(opacityVal)
                .write(bubgfp); // save
    }).catch(function (err) {
        console.error(err);
    });
   }
  }
  //uploading Business Updates bg image
  if(bupbgfile){
    bupbgImage = bupbgfile.name;
    //console.log(bupbgfile.name);
    let bupbgfp = defaultpath+bupbgImage;
    bupbgfile.mv(bupbgfp, function(err) {
     if (err)
       return res.status(500).send(err);
     res.end("File is uploaded");     
   });
   if(bupbgfp.indexOf('.png')!=-1){ 
   Jimp.read(bupbgfp).then(function (img) {
            return img.fade(opacityVal)
                .write(bupbgfp); // save
    }).catch(function (err) {
        console.error(err);
    });
   }
  }
  //uploading Planned Activities bg image
  if(pbgfile){
    pbgImage = pbgfile.name;
    //console.log(pbgfile.name);
    let pbgfp = defaultpath+pbgImage;
    pbgfile.mv(pbgfp, function(err) {
     if (err)
       return res.status(500).send(err);
     res.end("File is uploaded");     
   });
   if(pbgfp.indexOf('.png')!=-1){ 
   Jimp.read(pbgfp).then(function (img) {
            return img.fade(opacityVal)
                .write(pbgfp); // save
    }).catch(function (err) {
        console.error(err);
    });
   }
  }

  //uploading Project Statistics bg image
  if(psbgfile){
    psbgImage = psbgfile.name;
    //console.log(psbgfile.name);
    let psbgfp = defaultpath+psbgImage;
    psbgfile.mv(psbgfp, function(err) {
     if (err)
       return res.status(500).send(err);
     res.end("File is uploaded");     
   });
   if(psbgfp.indexOf('.png')!=-1){ 
   Jimp.read(psbgfp).then(function (img) {
            return img.fade(opacityVal)
                .write(psbgfp); // save
    }).catch(function (err) {
        console.error(err);
    });
   }
  }

});

//build html
function buildHtml() {
  console.log('build html');  
  var header = '';
  var body = '', businessArticle = '', businessUpdates = '', 
  planned = '', projectStatistics = '', technicalnews = '',
  healthtips = '', bDayandAnniversary ='', footersection='';

  var bannerImg = "images/"+headerImage;
  var bubgImg = "images/"+bubgImage;
  var bupbgImg = "images/"+bupbgImage;
  var pbgImg = "images/"+pbgImage;
  var psbgImg = "images/"+psbgImage;
  var tnbgImg = "images/"+tnbgImage;
  var htbgImg = "images/"+htbgImage;
  var tsImg = "images/"+tsbgImage;

  //tsbgImage
   
  var title = docTitle;
  var constructedHtml = '';

  var oppTitle1 = opp_Title.split('./')[0],
  oppTitle2 = opp_Title.split('./')[1],
  oppTitle3 = opp_Title.split('./')[2];
  //console.log('title from buildHtml '+title);

  // concatenate header string
  header = '<title>'+title+'</title>'+
        '<meta charset="UTF-8">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">';  

 //business article data section
 businessArticle = '<tr><td style="'+buTopColr+'height: 10px;"></td></tr>'+
			'<tbody style="background: url('+bubgImg+');background-repeat: repeat;'+bubgcolor+'">'+
			 '<tr id="bussiness">'+
                '<td style="padding:15px 10px 0 10px;">'+
                    '<table style="border: 0; border-collapse: collapse;'+butxtColor+'width: 100%">'+
                        '<tr>'+
                            '<td rowspan="2" style="width:11%">'+
                                '<img alt="Business" src="images/common/BusinessArticle.png">'+
                            '</td>'+
                            '<td style="padding-left: 15px;vertical-align: middle;"><span class="first" style="font-family: Impact;font-size: 32px;">'+b_title+'</span>'+
                            '</td>'+
                            '<td style="text-align: right;font-family: Impact; font-size: 17px">'+b_date+'</td>'+
                        '</tr>'+
                    '</table>'+
                '</td>'+
            '</tr>'+
			
			 '<tr id="biz-text">'+
                '<td style="text-align: left;padding:5px 10px 15px 10px;color: #000; font-size: 12px">'+
					//some authored paragraphs
                    b_data+
                    '<div style="float:right; font-size: 15px; margin-top: 5px;">'+
                        '<p style="'+butxtColor+'display:inline; font-weight: bold;">Author: </p>'+b_author+'</div>'+
				'</td>'+
            '</tr></tbody>';

//business updates template
businessUpdates = '<tr><td style="'+bup_topBrdColr+'height: 10px;"></td></tr>'+
                   '<tbody style="background: url('+bupbgImg+');background-repeat: repeat;'+bup_bgcolor+'">'+
            '<tr id="bussiness">'+
                '<td style="padding:15px 10px 0 10px;">'+
                    '<table style="border: 0; border-collapse: collapse;'+bup_Txtcolor+';width: 100%">'+
                        '<tr>'+
                            '<td rowspan="2" style="width:3%">'+
                                '<img style="width:90px; height:90px;" alt="Business" src="images/common/Business update.png">'+
                            '</td>'+
                            '<td style="padding-left: 15px;vertical-align: middle;"><span class="first" style="font-family: Impact;font-size: 32px;">'+bup_Title+'</span>'+
                            '</td>'+
                        '</tr>'+
                    '</table>'+
                '</td>'+
            '</tr>'+
            '<tr id="biz-text">'+
                '<td style="text-align: left;padding:5px 10px 15px 10px;color: #000; font-size: 12px">'+
                    //some text
                    bup_data+
                '</td>'+
            '</tr>'+
            '<tr id="oppertunity" >'+
                '<td>'+
                    '<table style="border: 0; border-collapse: collapse;color: #000;">'+
                        '<tr style="vertical-align:top">'+
                            '<td class="header" style="padding-left:10px;">'+
                                '<table style="border: 0; border-collapse: collapse;">'+
                                    '<tr>'+
                                        '<td colspan="2" style="font-family: Impact; font-size: 32px; '+bup_Txtcolor+'">'+oppTitle1+'</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td><img alt="oppertunity" src="images/common/Person_Climbing_A_Ladder-512.png" style="height: 80px;position: relative; top: 6px;"></td>'+
                                        '<td style="font-family: Impact; font-size:32px; text-align: right; line-height: 53px;'+bup_Txtcolor+'">'+oppTitle2+' <br> '+oppTitle3+'</td>'+
                                    '</tr>'+
                                '</table>'+
                            '</td>'+
                            '<td style="padding: 0 10px 0 10px; font-family: Century Gothic;font-size: 12px;">'+
                                //some text
                                opp_data+
                            '</td>'+
                        '</tr>'+
                    '</table>'+
                '</td>'+
            '</tr>'+
            '<tr id="archieve">'+
                '<td style="padding:15px;">'+
                    '<table style="border: 0; border-collapse: collapse;color: #000;font-family: Century Gothic;">'+
                        '<tr>'+
                            '<td style="padding-left: 45px;"><img alt="archive" src="images/common/Achieved.png" style="margin-right: 15px;"></td>'+
                            '<td style="padding-left:15px; vertical-align: top;font-size: 12px">'+
                                '<div style="font-size: 32px; '+bup_Txtcolor+' margin-bottom: 10px;font-family: Impact;">'+achv_Title+'</div>'+
                                //some text
                                achv_data+
                            '</td>'+
                        '</tr>'+
                    '</table>'+
                '</td>'+
            '</tr>'+
			'</tbody>';


//Planned Activities template
 planned = '<tr><td style="'+pTBColr+'height: 10px;"></td></tr>'+
            '<tr id="planning" style="background: url('+pbgImg+');background-repeat: repeat;'+pbgcolor+'">'+
                '<td style="padding:10px;">'+
                    '<table style="border: 0; border-collapse: collapse;color:#000;font-family:Century Gothic;width:100%">'+
                        '<tr>'+
                            '<td style="font-size: 12px">'+
                                '<div style="font-size: 32px;margin-bottom: 10px;font-family: Impact;'+pTxtColr+'">'+pTitle+'</div>'+
                                 //some text
                                 plan_data+
                            '</td>'+
                            '<td style="text-align: right">'+
                                '<img alt="planning" src="images/common/Planning.png" >'+
                            '</td>'+
                        '</tr>'+
                    '</table>'+
                '</td>'+
            '</tr>';

//Project statistics template
var psMultiField = '';     
if(psmulti){
    for (var key in psmulti) {
        var createTr = '';
        if (psmulti.hasOwnProperty(key)) {
            createTr = '<tr>'+
                '<td style="padding: 12px 0 12px 0;text-align: center;"><img alt="Graph" src="images/common/chart-pie-512.png" ></td>'+
                '<td style="font-family: Impact;font-size: 21pt;text-align: center">'+psmulti[key].name+'</td>'+
                '<td style="text-align:left">'+psmulti[key].desc+'</td>'+
            '</tr>';
        }
        psMultiField = psMultiField + createTr;                                    
    }
}
projectStatistics = '<tr><td style="'+psTBColr+'height: 10px;"></td></tr>'+
    '<tbody style="background: url('+psbgImg+');background-repeat: repeat;'+psbgcolor+'">'+
			'<tr id="statistics">'+
                '<td style="padding:15px;">'+
                    '<table style="border: 0; border-collapse: collapse;font-family: Century Gothic;width:100%">'+
                        '<tr><td colspan="2"><div style="font-size: 32px;margin-bottom: 10px;font-family: Impact;text-align: center;'+psTxtColr+'">'+psTitle+'</div></td></tr>'+
                        '<tr>'+
                            '<td>'+
                                '<div style="width: 50%;float: left;margin-top: 10px;">'+
                                    '<table style="border: 0; border-collapse: collapse; color: #000;font-family: Century Gothic;width: 472px;font-size: 14px">'+   
                                     psMultiField+
                                    '</table>'+
                                '</div>'+
                            '</td>'+
                            '<td>'+
                                '<div style="float: right;">'+
                                    '<table style="border: 0; border-collapse: collapse;width: 100%;color: #000;width:350px">'+
                                        '<tr>'+
                                            '<td colspan="2">'+
                                                
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style="text-align:center">'+
                                                '<img alt="Percentage" style="width:90px;" src="images/common/attrition_icon.png" >'+
                                                
                                                '</td>'+
                                            '<td style="text-align:right">'+
                                                '<img alt="Graph" src="images/common/DFA_image 2.png" style="width: 75px;">'+
                                                
                                                
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td style="text-align:center; padding-bottom: 19px">'+
                                                '<div style="font-family: Impact;font-size: 21pt;">'+psAttrition+'</div>'+
                                                '<img alt="Percentage" src="images/common/Attrition.png">'+
                                            '</td>'+
                                            '<td style="text-align:right; padding-bottom: 19px">'+
                                                '<div style="font-family: Impact;font-size: 21pt;margin-right: 13px">'+psDfa+'</div>'+
                                                '<img alt="Graph" src="images/common/DFA.png" >'+
                                            '</td>'+
                                        '</tr>'+
                                    '</table>'+

                                '</div>'+
                            '</td>'+
                        '</tr>'+
                    '</table>'+
                '</td>'+
            '</tr>'+
			'</tbody>';

//Technical Newsletter
technicalnews = '<tr><td style="'+tnTBColr+'height: 10px;"></td></tr>'+
                   '<tbody style="background: url('+tnbgImg+');background-repeat: repeat;'+tnbgcolor+'">'+
                    '<tr id="technical">'+
                        '<td style="padding:15px;color: #000;font-size: 12px;">'+
                        '<div style="width: 100%;text-align: center;"><img alt="Technical Newsletter" src="images/common/Tech_icon.png" ></div>'+                    
                        '<div style="font-size: 32px;margin-bottom: 10px; '+tnTxtColr+' font-family: Impact;text-align: center">'+tnTitle+'</div>'+					   
                         tn_data+
					    '<div style="float:right; font-size: 15px; margin-top: 5px;"><p style="'+tnTxtColr+' display:inline; font-weight: bold;">Author: </p>'+tnAuthor+'</div>'+
                        '</td>'+
                    '</tr>'+
                '</tbody>';

//Health Tips template
healthtips = '<tr><td style="'+htTBColr+'height: 10px;"></td></tr>'+
            '<tbody style="background: url('+htbgImg+');background-repeat: repeat;'+htbgcolor+'">'+
                '<tr id="healthTip">'+
                    '<td style="padding:10px;">'+
                        '<table style="border: 0; border-collapse: collapse;  color: #000; font-family: Century Gothic;width:100%">'+
                            '<tr>'+
                                '<td style="font-size: 12px">'+
                                    '<div style="font-size: 32px;margin-bottom: 10px;'+htTxtColr+'font-family: Impact;">'+htTitle+'</div>'+
                                    //some text  
                                    ht_data+
                                '</td>'+
                                '<td style="text-align: right">'+
                                    '<img alt="planning" src="images/common/Medical_health_care.png" >'+
                                '</td>'+
                            '</tr>'+
                        '</table>'+
                    '</td>'+
                '</tr>'+
            '</tbody>';

//team image template
teamimage = '<tr><td style="'+tsTBColr+'height: 10px;"></td></tr>'+
            '<tr>'+
                '<td id="teamImage">'+                 
                    '<img alt="Team Image" style="width:100%;" src="'+tsImg+'">'+
                '</td>'+
            '</tr>';

//birthday and anniversary template

var bday = '';  
var fisrtTd = '<td style="padding:0 0 15px 0; text-align: center; width:20%">'+
              '<img alt="Birthday" src="images/common/Birtthday.png"></td>';   
if(bdayfiles.length>0){
    bday = fisrtTd;
    for (var key in bdayfiles) {
        var createTd = '';
        if (bdayfiles.hasOwnProperty(key)) {
            createTd = '<td style="padding:0 0 15px 0; text-align: center; width:20%">'+
                        '<img alt="Birthday" width="75px" src="images/bday/'+bdayfiles[key].originalname+'">'+
                        '<div>'+bdayinfo.name[key]+'</div></td>';
        }
        bday = bday + createTd;                                    
    }
}

var aniv = '';  
var fisrtTd = '<td style="padding:0 0 15px 0; width: 20%; text-align: center">'+
              '<img alt="Anniversary" src="images/common/Anniversary.png"></td>';

if(anivfiles.length>0){
    aniv = fisrtTd;
    for (var key in anivfiles) {
        var createTd = '';
        if (anivfiles.hasOwnProperty(key)) {
            createTd = '<td style="padding:0 0 15px 0; width:20%; text-align: center">'+
                        '<img alt="Anniversary" width="75px" src="images/bday/'+anivfiles[key].originalname+'">'+
                        '<div>'+anivinfo.name2[key]+'</div></td>';
        }
        aniv = aniv + createTd;                                    
    }
}
 
bDayandAnniversary = '<tr><td style="'+bdTBColr+'height: 10px;"></td></tr>'+
            '<tr id="trophy" style="'+bdbgcolor+'">'+
                '<td style="padding:15px;text-align:center;">'+
                    '<table style="border: 0; border-collapse: collapse;font-family: Century Gothic; font-weight: bold; '+bdTxtColr+'width:100%">'+
                        '<tr style="vertical-align:middle">'+
                         bday+
                        '</tr>'+
                        '<tr style="vertical-align:middle">'+
                         aniv+   						
                        '</tr>'+
                    '</table>'+
                '</td>'+
            '</tr>';
 //bDayandAnniversary = '';

//footer

footersection = '<tr id="footersec" style="height: 46px;'+ftTxtColr+ftbgcolor+'">'+
        '<td style="padding:15px;">'+
            '<table style="float : right; margin-top: -10px;">'+
                '<tr><td><div style=" font-size: 15px; margin-top: 5px;">'+
                '<p style="color:#000; display:inline; font-weight: bold;">Concept: </p>'+ftCncpt+'</div></td></tr>'+
                '<tr style="display: block; margin-bottom: 25px;">'+
                '<td><div style="float:right; font-size: 15px; margin-top: 5px;">'+
                '<p style="color:#000; display:inline; font-weight: bold;">Execution: </p>'+ftExecn+'</div></td></tr>'+
            '</table>'+
            '<table style="border: 0; border-collapse: collapse;width:100%;font-family: Century Gothic;">'+            
                '<tr>'+
                    '<td><img alt="Graph" src="images/common/SR_Logo_RGB_W.png"></td>'+
                    '<td style="text-align: right; font-size: 11px">'+
                    '<a style="'+ftTxtColr+'text-decoration: none;" href="mailto:'+ftEmail+'?Subject=Newsletter%20feedback" target="_top">CLICK HERE TO GIVE FEEDBACK</a></td>'+
                '</tr>'+
            '</table>'+
        '</td>'+
    '</tr>';
 

 //main body section
 body = '<table style="width: 900px;border: 0; border-collapse: collapse;font-family: Century Gothic; margin:0 auto 0 auto">'+
            '<tr><td id="header-top" style="height: 17px;'+bnBrColr+'"></td></tr>'+
            '<tr >'+
                '<td id="header">'+                
                    '<img alt="logo" src="'+bannerImg+'">'+
                '</td>'+
            '</tr>'+
            businessArticle+
            businessUpdates+
            planned+
            projectStatistics+
            technicalnews+
            healthtips+
            teamimage+
            bDayandAnniversary+
            footersection+
            '</table>';

  constructedHtml = '<!DOCTYPE html>'+
       '<html><header>' + header + '</header>'+
       '<body style="font-size: 12px; -webkit-print-color-adjust:exact; background-color: #f6f6f6;color: #000;margin: 0;padding: 0; margin: 0 auto 0 auto;">' + body + '</body></html>';
  return pretty(constructedHtml);
  
};

app.listen(port, function() {
  console.log('listening on port *: ' + port);
});

module.exports = app;