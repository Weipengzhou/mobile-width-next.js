import { call, put, takeLatest } from 'redux-saga/effects';
import Router from 'next/router'
import * as apis from './api';
import { types } from './types';
import * as actions from './actions';
import { Toast } from 'antd-mobile'


function* indexBaojia({ text }) {
    try {
        const result = yield call(apis.indexBaojia, text);

        if (result.status == 1) {
            Toast.success('报价成功，请等待客服与您联系!!!', 1);
        } else {
            Toast.fail('服务器错误 !!!', 1);
        }


    } catch (err) {
        Toast.fail('服务器错误 !!!', 1);
    }
}

function* yanFang({ text }) {
    try {
        const result = yield call(apis.yanFang, text);

        if (result.status == 1) {
            yield put(Router.push('/success'))
        } else {
            Toast.fail('服务器错误 !!!', 1);
        }


    } catch (err) {
        Toast.fail('服务器错误 !!!', 1);
    }
}


function* getCode({ text }) {
    try {
        const result = yield call(apis.getCode, text);

        if (result.status == 0) {
            yield put(actions.cunCode(result.token))
        } else {
            Toast.fail('服务器错误 !!!', 1);
        }

    } catch (err) {
        Toast.fail('服务器错误 !!!', 1);
    }
}
function* submitBaojia({ text }) {
    try {
        const result = yield call(apis.submitBaojia, text);
        if (result.status == 1) {
            yield put(Router.push('/success'))
        } else {
            Toast.fail('验证码错误 !!!', 1);
        }
    } catch (err) {
        Toast.fail('服务器错误 !!!', 1);
    }
}

function* getImg({ text }) {
    try {
        const result = yield call(apis.getImg, text);
        if (result.code == 1) {
          
             yield put(actions.Save_Img(result))
        } else {
            Toast.fail('服务器错误 !!!', 1);
        }
    } catch (err) {
        Toast.fail('服务器错误 !!!', 1);
    }
}
function* getComImg({ text }) {
    try {
        const result = yield call(apis.getCompanyImg, text);
        if (result.code == 1) {
          
             yield put(actions.Com_Save_Img(result))
        } else {
            Toast.fail('服务器错误 !!!', 1);
        }
    } catch (err) {
        Toast.fail('服务器错误 !!!', 1);
    }
}

export default function* defaultSaga() {
    yield [
        takeLatest(types.Index_Baojia, indexBaojia),
        takeLatest(types.Yan_Fang, yanFang),
        takeLatest(types.Get_Code, getCode),
        takeLatest(types.Submit_Baojia, submitBaojia),
        takeLatest(types.Get_Img, getImg),
        takeLatest(types.Com_Get_Img, getComImg),
    ];
}