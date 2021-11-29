import { Table, Modal, Button, Pagination, Image, ConfigProvider } from 'antd'
import { useSelector, useDispatch } from 'umi'
import { CustomerObj } from '@/types'
import dayjs from 'dayjs'
import zh_CN from 'antd/es/locale/zh_CN';
import '../../pages/index.less'
import { useState } from 'react';


interface Props {
    onPageChange: (pageNum: number, pageSize: number) => void,
    pageNum: number
    pageSize: number,
    data: any,
    total: number
}
const Operations = (props: Props) => {
    //   let OperationsInfo = useSelector((state: any) => state.Operations.OperationsInfo)
    //   let total = useSelector((state: any) => state.Operations.total)
    let dispatch = useDispatch()
    //   换页
    const onPageChange = (page: number, pageSize?: number) => {
        props.onPageChange(page, pageSize!)
    }
    let [visible, setVisible] = useState(false);
    let [pic, setPic] = useState<any>();
    let look=(item:CustomerObj) => {
          setPic(item)
          setVisible(true)     
    }
    const columns = [
        {
            title: '序号',
            dataIndex: 'key',
            key: 'key',
            align: 'start'
        },
        {
            title: '操作人员身份',
            dataIndex: 'userRole',
            key: 'userRole',
            align: 'start',
        },
        {
            title: '操作人员姓名',
            dataIndex: 'username',
            key: 'username',
            align: 'start',
        },
        {
            title: '操作人员电话',
            dataIndex: 'mobile',
            key: 'mobile',
            align: 'start',

        },
        {
            title: '操作时间',
            dataIndex: 'time',
            key: 'time',
            align: 'start',

        },
        {
            title: 'ip地址',
            dataIndex: 'ipaddress',
            key: 'img',
            align: 'start',
            
        },
        {
            title: '操作信息',
            dataIndex: 'time',
            key: 'time',
            align: 'start',

        },
    ];
    return (
        <div>

            <Table rowKey="_id" columns={columns as any} dataSource={props.data} className={'m-t10'}
                pagination={false} />
            <div className={'table-foot'}>
                <ConfigProvider locale={zh_CN}>
                    <Pagination
                        showQuickJumper
                        current={props.pageNum}
                        total={props.data && props.total}
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

export default Operations

function setIsModalVisible(arg0: boolean) {
    throw new Error('Function not implemented.');
}

