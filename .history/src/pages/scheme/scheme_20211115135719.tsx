import React from 'react'

const Scheme = () => {
    return (
        <div className={'scheme'}>
           <div className={'scheme-all'}>
               <h2>装修方案</h2>
               <div className={'scheme-header'}>
                   <div>首页</div>
                   <div className={''}><img src={require('./arrow.png')} className={'img'}/></div>
                   <div>装修方案</div>
                   <div className={''}><img src={require('./arrow.png')} className={'img'}/></div>
                   <div>列表</div>
               </div>
           </div>

        </div>
    )
}

export default Scheme
