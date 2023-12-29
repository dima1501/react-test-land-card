import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    padding: 14px;
    @media (min-width: 768px) {
        display: flex;
        gap: 20px;
        padding-right: 60px;
    }
`

export const CardGallery = styled.div`
    flex-shrink: 0;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        margin-bottom: 0;
        width: 100%;
        max-width: 336px;
    }
`

export const CardContent = styled.div`
    flex-grow: 1;
`

export const CardTitle = styled.h2`
    color: #3F586E;
    font-family: "Exo 2";
    font-size: 14px;
    line-height: 16px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 8px;
    @media (min-width: 768px) {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 18px;
    }
`;

export const CardPlaceTagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    @media (min-width: 768px) {
        margin-bottom: 10px;
    }
`

export const CardPlaceTag = styled.a`
    color: #26C4F4;
    font-family: "Exo 2";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 7px 10px;
    text-decoration: none;
    border-radius: 20px;
    background: rgba(38, 196, 244, 0.10);
    @media (min-width: 768px) {
        font-size: 14px
    }
`

export const CardDescr = styled.div`
    margin-bottom: 8px;
    @media (min-width: 768px) {
        margin-bottom: 10px;
    }
`

export const CardText = styled.p`
    margin: 0;
    color: #3F586E;
    font-family: "Exo 2";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;

    @media (min-width: 768px) {
        font-size: 14px;
    }
`

export const CardRoute = styled.ul`
    margin-bottom: 10px;
`

export const CardRouteLine = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 2px;
`

export const CardRoutePic = styled.img`
    flex-shrink: 0;
    margin-right: 4px;
    width: 18px;
    height: 18px;
`

export const CardRoutePoint = styled.p`
    color:  #3F586E;
    font-family: "Exo 2";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    margin-right: 10px;
    @media (min-width: 768px) {
        font-size: 14px;
    }
`

export const CardRouteTime = styled.p`
    color: #BFCEDB;
    font-family: "Exo 2";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    @media (min-width: 768px) {
        font-size: 14px;
    }
`

export const CardCosts = styled.ul`
    margin-bottom: 16px;
`

export const CardCostsLine = styled.li`
    display: flex;
    margin-bottom: 4px;
`

export const CardCostsMain = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    min-width: 58%;
    margin-right: 4px;
    @media (min-width: 768px) {
        min-width: 200px;
    }
    &:after {
        content: "";
        border-bottom: 2px dotted #E5EDF3;
        display: block;
        flex-grow: 1;
    }
`

export const CardCostsName = styled.div`
    padding-bottom: 1px;
`

export const CardCostsCount = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 8px;
    border-radius: 30px;
    background: #EDF3F7;
    margin: 0 5px;
    color: #3F586E;
    font-family: "Exo 2";
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    min-width: 27px;

    @media (min-width: 768px) {
        font-size: 12px;
        padding: 2px 8px;
    }
`

export const CardCostsRange = styled.p`
    color: #3F586E;
    font-family: "Exo 2";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;

    @media (min-width: 768px) {
        font-size: 14px;
    }

    span {
        display: none;
        @media (min-width: 768px) {
            display: inline-block;
        }
    }
`

export const CardTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    @media (min-width: 768px) {
        gap: 6px;
    }
`

export const CardTag = styled.li`
    color: #3F586E;
    text-align: center;
    font-family: "Exo 2";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    border-radius: 20px;
    background: #EDF3F7;
    padding: 4px 10px;
    @media (min-width: 768px) {
        line-height: 18px;
        font-size: 14px;
    }
`

export const CardTagsList = styled(CardTags).attrs(() => ({
    as: 'ul',
}))`
    & ${CardTag} {
        @media (max-width: 767px) {
            display: ${props => (props.$showalltags == 'true' ? 'block' : 'none')};
            &:nth-child(-n+2) {
                display: block;
            }
        }
    }
`;

export const CardBtn = styled.button`
    padding: 3px 10px;
    border-radius: 20px;
    border: 1px solid #E5EDF3;
    color: #3F586E;
    font-family: "Exo 2";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    background: transparent;
    @media (min-width: 768px) {
        display: none;
    }
`

export const CardLinks = styled.div`
    display: none;
    @media (min-width: 768px) {
        position: absolute;
        right: 18px;
        top: 14px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
`

export const CardLinksItem = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 14px;
    background: #EDF3F7;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .3s;
    &:hover {
        background: #e6ecf0;
    }
`

export const CardLinksItemPic = styled.img`
    width: 24px;
    height: 24px;
`