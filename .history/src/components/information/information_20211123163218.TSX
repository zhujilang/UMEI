import { List, Card, Button, Popconfirm, Pagination, Image, ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { InformationObj, SchemeObj } from '@/types'
import dayjs from 'dayjs'
import zh_CN from 'antd/es/locale/zh_CN';
import '../../pages/index.less'
import { EyeOutlined } from '@ant-design/icons';


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
    //下架方案
    const del = (item: SchemeObj) => {
        console.log(item);

        // dispatch({
        //   type: 'Scheme/postselected',
        //   payload: {
        //     id: item.key,
        //     status: 0
        //   }
        // })
    }
    //   换页
    const onPageChange = (page: number, pageSize?: number) => {
        props.onPageChange(page, pageSize!)
    }
    return (
        <div>

            <List
                grid={{ column: 4 }}
                dataSource={informationInfo}
                renderItem={(item: InformationObj) => (
                    <List.Item>
                        <div className={'informationlist'}>
                            <div>
                                <div ><img src={item.headImg} style={{ width: 250, height: 150 }} /></div>
                                <div className={'title'}>
                                    <div className={'headTitle'}>{item.headTitle} </div>
                                    <div className={'views'}>
                                        <div><EyeOutlined /></div>
                                        <div className={''}>0</div>
                                    </div>
                                </div>
                                <div>发布时间：{dayjs(item.creatTime).format('YYYY-MM-DD HH:mm:ss')}</div>
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
            </div>
        </div>
    )
}

export default Informations

function setIsModalVisible(arg0: boolean) {
    throw new Error('Function not implemented.');
}

