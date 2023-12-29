import React, { useState } from 'react';

import subwayBlue from "@/images/subway-blue.svg";
import highway from "@/images/highway.svg";
import train from "@/images/train.svg";

import mapIcon from "@/images/icon-map.svg";
import modelIcon from "@/images/icon-3D.svg";

import { Gallery } from '../Gallery/Gallery';

import {
    Card, CardGallery, CardContent,
    CardTitle, CardPlaceTagList, CardPlaceTag,
    CardDescr, CardText, CardRoute, CardRouteLine,
    CardRoutePic, CardRoutePoint, CardRouteTime,
    CardCosts, CardCostsLine, CardCostsMain,
    CardCostsName, CardCostsCount, CardCostsRange,
    CardTags, CardTag, CardTagsList, CardBtn,
    CardLinks, CardLinksItem, CardLinksItemPic
} from './LandCardStyles';


export const LandCard = () => {

    const [showAllTags, setShowAllTags] = useState(false);

    const handleShowTags = () => {
        setShowAllTags(true);
    };

    return (
        <>
            <Card>
                <CardGallery>
                    <Gallery />
                </CardGallery>
                <CardContent>
                    <CardTitle>Тишь да Гладь, СНТ</CardTitle>

                    <CardPlaceTagList>
                        <CardPlaceTag href="#">Факт</CardPlaceTag>
                    </CardPlaceTagList>

                    <CardDescr>
                        <CardText>ЛО, Всеволожский р-н, Колтушское сельское поселение</CardText>
                    </CardDescr>

                    <CardRoute>
                        <CardRouteLine>
                            <CardRoutePic src={subwayBlue}></CardRoutePic>
                            <CardRoutePoint>Парнас</CardRoutePoint>
                            <CardRouteTime>~1 час 40 мин. на транспорте</CardRouteTime>
                        </CardRouteLine>

                        <CardRouteLine>
                            <CardRoutePic src={highway}></CardRoutePic>
                            <CardRoutePoint>Камышовское шоссе</CardRoutePoint>
                            <CardRouteTime>~21 км от КАД</CardRouteTime>
                        </CardRouteLine>

                        <CardRouteLine>
                            <CardRoutePic src={train}></CardRoutePic>
                            <CardRoutePoint>Ланская</CardRoutePoint>
                            <CardRouteTime>20 мин. пешком</CardRouteTime>
                        </CardRouteLine>

                        <CardRouteLine>
                            <CardRoutePic src={train}></CardRoutePic>
                            <CardRoutePoint>Ланская</CardRoutePoint>
                            <CardRouteTime>5 мин. на машине</CardRouteTime>
                        </CardRouteLine>
                    </CardRoute>

                    <CardCosts>
                        <CardCostsLine>
                            <CardCostsMain>
                                <CardCostsName>
                                    <CardText>Участки</CardText>
                                </CardCostsName>
                                <CardCostsCount>134</CardCostsCount>
                            </CardCostsMain>
                            <CardCostsRange>от 6,5 <span>млн. р. </span>— 12,5 млн.р.</CardCostsRange>
                        </CardCostsLine>
                        <CardCostsLine>
                            <CardCostsMain>
                                <CardCostsName>
                                    <CardText>Участки с подрядом</CardText>
                                </CardCostsName>
                                <CardCostsCount>5</CardCostsCount>
                            </CardCostsMain>
                            <CardCostsRange>от 7,5 <span>млн. р. </span>— 12,5 млн.р.</CardCostsRange>
                        </CardCostsLine>
                    </CardCosts>

                    <CardTags>
                        <CardTagsList $showalltags={showAllTags ? 'true' : 'false'}>
                            <CardTag href="#">СНТ</CardTag>
                            <CardTag href="#">Газ</CardTag>
                            <CardTag href="#">Центральное электричество — 15 кВт</CardTag>
                            <CardTag href="#">Центральное водоснабжение</CardTag>
                            <CardTag href="#">Центральная канализация</CardTag>
                            <CardTag href="#">Асфальтированные дороги</CardTag>
                            <CardTag href="#">Рядом озеро</CardTag>
                        </CardTagsList>
                        {!showAllTags && <CardBtn onClick={handleShowTags}>Показать все</CardBtn>}
                    </CardTags>

                    <CardLinks>
                        <CardLinksItem href="#">
                            <CardLinksItemPic src={mapIcon}></CardLinksItemPic>
                        </CardLinksItem>
                        <CardLinksItem href="#">
                            <CardLinksItemPic src={modelIcon}></CardLinksItemPic>
                        </CardLinksItem>
                    </CardLinks>

                </CardContent>
            </Card>
        </>
    )
}