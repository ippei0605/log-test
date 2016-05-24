/**
 * @file Log テスト
 * @author Ippei SUZUKI
 */

// モジュールを読込む。
var context = require('cfenv');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var routes = require('./routes');

//環境変数を取得する。
var appEnv = require('cfenv').getAppEnv();

// アプリケーションを作成する。
var app = express();

// ミドルウェアを設定する。
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(favicon(__dirname + '/public/favicon.ico'));


// ルートを設定する。
app.get('/', routes.doGet);
app.post('/', routes.doPost);

// リクエストを受付ける。
app.listen(appEnv.port, function() {
	console.log('server starting on ' + appEnv.url);
});