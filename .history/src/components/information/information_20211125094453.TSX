import { List, Card, Button, Popconfirm, Pagination, Divider, ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { InformationObj, SchemeObj } from '@/types'
import dayjs from 'dayjs'
import zh_CN from 'antd/es/locale/zh_CN';
import '../../pages/index.less'
import { EyeOutlined } from '@ant-design/icons';
import { useState } from 'react';


interface Props {
    onPageChange: (pageNum: number, pageSize: number) => void,
    pageNum: number
    pageSize: number,
    status: number,
    keyword: string,
}
const Informations = (props: Props) => {
    let informationInfo = useSelector((state: any) => state.Information.informationInfo)
    let total = useSelector((state: any) => state.Information.total)
    let dispatch = useDispatch()
    let [isModalVisible, setIsModalVisible] = useState(false);
    let [detail, setDetail] = useState();
    //   换页
    const onPageChange = (page: number, pageSize?: number) => {
        props.onPageChange(page, pageSize!)
    }
    let lookdetail = (item: any) => {
        console.log(item);
        setIsModalVisible(true)
        setDetail(item)
    }
    return (
        <div>

            {isModalVisible?<div></div>:<div>
                <List
                grid={{ column: 4 }}
                dataSource={informationInfo}
                renderItem={(item: InformationObj) => (
                    <List.Item>
                        <div>
                            <div className={'informationlist'}>
                                <div>
                                    <div onClick={() => {
                                        lookdetail(item)
                                    }}><img src={item.headImg} style={{ width: 250, height: 150 }} /></div>
                                    <div className={'title'}>
                                        <div className={'headTitle'}>{item.headTitle} </div>
                                        <div className={'views'}>
                                            <div><EyeOutlined /></div>
                                            <div className={'view'}>0</div>
                                        </div>
                                    </div>
                                    <div className={'time'}>发布时间：{dayjs(item.creatTime).format('YYYY-MM-DD HH:mm:ss')}</div>
                                    <Divider dashed />
                                    <div className={'combination'}>
                                        <div>相关单品</div>
                                        <div>黑色金属座椅</div>
                                        <div>原木梳妆台组合</div>
                                    </div>
                                </div>
                                <div className={item.status == '已发布' ? 'state-blue' : item.status == '已失效' ? 'state-grey' : item.status == '审核中' ? 'state-orange' : 'state-red'}>{item.status}</div>
                            </div>
                        </div>

                    </List.Item>
                )}
            />
            <div className={'table-foot'}>
                <ConfigProvider locale={zh_CN}>
                    <Pagination
                        showQuickJumper
                        current={props.pageNum}
                        total={informationInfo && total}
                        className={'m-t20'}
                        onChange={onPageChange}
                        showSizeChanger
                        showTotal={total => `共 ${total} 条`}
                    />
                </ConfigProvider>
            </div></div>}
        </div>
    )
}

export default Informations

function setIsModalVisible(arg0: boolean) {
    throw new Error('Function not implemented.');
}

