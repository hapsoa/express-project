'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var dataManager = new function () {
    var _this = this;

    var getData = function getData(filename) {
        return new Promise(function (resolve, reject) {
            $.get('/data/personData/' + filename + '.json', function (data, status) {
                resolve(data);
            });
        });
    };

    var showData = function showData(dataArray) {
        // append() 한다.
        var $resultZone = $('.result-zone');

        for (var i = 0; i < dataArray.length; i++) {
            $resultZone.append(JSON.stringify(dataArray[i]));
        }
    };

    this.gatherData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var $checkedBox, promiseArray, dataArray, i, $element, filename;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        $checkedBox = $('input:checked');
                        promiseArray = [];
                        dataArray = void 0;

                        // for (let i = 0; i < $checkedBox.length; i++) {
                        //     const $element = $($checkedBox[i]);
                        //     const filename = $element.attr('value');
                        //
                        //     dataArray.push(await getData(filename));
                        // }

                        for (i = 0; i < $checkedBox.length; i++) {
                            $element = $($checkedBox[i]);
                            filename = $element.attr('value');


                            promiseArray.push(getData(filename));
                        }

                        _context.next = 6;
                        return Promise.all(promiseArray);

                    case 6:
                        dataArray = _context.sent;


                        showData(dataArray);

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));
}();

var eventManager = new function () {

    var $confirmButton = $('button');
    var $resultZone = $('.result-zone');

    $confirmButton.on('click', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:

                        $resultZone.empty();
                        // dataManager.processData();
                        _context2.next = 3;
                        return dataManager.gatherData();

                    case 3:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    })));
}();