import React from 'react';

interface IBoxProps {
    across?: boolean
    down?: boolean
    flex?: number, // flex
    jS?: boolean, // justify start
    jC?: boolean, // justify center
    jE?: boolean, // justify end
    jB?: boolean, // justify space-between
    jA?: boolean, // justify space-around
    jEv?: boolean,
    aS?: boolean, // align start
    aC?: boolean, // align center
    aE?: boolean, // align end
    aStr?: boolean, // align stretch
    p?: number, // padding
    pT?: number, // padding top
    pR?: number, // padding right
    pB?: number, // padding bottom
    pL?: number, // padding left
    m?: number, // margin
    mT?: number, // margin top
    mR?: number, // margin right
    mB?: number, // margin bottom
    mL?: number, // margin left
    border?: string, // border
    fixed?: boolean, // position fixed
    relative?: boolean, // position relative
    t?: number, // top
    b?: number, // bottom
    l?: number, // left
    r?: number, // right
    children: React.ReactElement,
    style?: React.CSSProperties,
}

const Box = (props: IBoxProps) => {

    let styleOptions: React.CSSProperties = {
        position: props.fixed ? 'fixed' : props.relative ? 'relative' : 'initial',
        display: 'flex',
        flex: props.flex,
        flexDirection: props.across ? 'row' : props.down ? 'column' : 'column',
        justifyContent: props.jS ? 'flex-start' : props.jC ? 'center' : props.jE ? 'flex-end' : props.jB ? 'space-between' : props.jA ? 'space-around' : props.jEv ? 'space-evenly' : 'center',
        alignItems: props.aS ? 'flex-start' : props.aC ? 'center' : props.aE ? 'flex-end' : props.aStr ? 'stretch' : 'center',
        border: props.border ? props.border : 'initial',
        top: props.t ? props.t : 'initial',
        bottom: props.b ? props.b : 'initial',
        right: props.r ? props.r : 'initial',
        left: props.l ? props.l : 'initial',
    };

    if (props.m) styleOptions.margin = props.m;
    if (props.mT) styleOptions.marginTop = props.mT;
    if (props.mR) styleOptions.marginRight = props.mR;
    if (props.mB) styleOptions.marginBottom = props.mB;
    if (props.mL) styleOptions.marginLeft = props.mL;

    if (props.p) styleOptions.margin = props.p;
    if (props.pT) styleOptions.marginTop = props.pT;
    if (props.pR) styleOptions.marginRight = props.pR;
    if (props.pB) styleOptions.marginBottom = props.pB;
    if (props.pL) styleOptions.marginLeft = props.pL;

    return (
        <div style={{...styleOptions, ...props.style}}>
            {props.children}
        </div>
    )
}

export default Box;
