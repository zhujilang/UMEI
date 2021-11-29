import React from 'react'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Scheme = () => {
    return (
        <div className={'scheme'}>
            <div className={'scheme-all'}>
                <h2>装修方案</h2>
                <div className={'scheme-header'}>
                    <div className={'interval'}>首页</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div className={'interval'}>装修方案</div>
                    <div className={'interval'}><img src={require('./arrow.png')} className={'img'} /></div>
                    <div>列表</div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <Button type="primary" icon={<PlusOutlined />}>
                            创建新的装修
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Scheme
