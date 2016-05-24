/**
 * Log テストのルーティング
 *
 * @module routes/index
 * @author Ippei SUZUKI
 */

// モジュールを読込む。
var packageJson = require('../package.json');
var log4js = require('log4js');

//ログを設定する。
log4js.configure({
appenders : [ {
	"type" : "dateFile",
	"category" : "app",
	"filename" : "logs/app.log",
	"pattern" : "-yyyy-MM-dd"
}, ]
});

//ログ出力
var logger = log4js.getLogger('app');

// カウント
var count = 0;

/** ページを表示する。 */
exports.doGet = function(req, res) {
	logger.info('GET /');
	res.render('index', {
		"packageJson" : packageJson,
		"count" : count
	});
};

/** カウントして、ページを表示する。 */
exports.doPost = function(req, res) {
	logger.info('POST /');
	count++;
	res.redirect('/');
};
