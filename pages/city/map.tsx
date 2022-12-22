import Building1 from '../../ui/assets/images/city/building_1.svg';
import Building2 from '../../ui/assets/images/city/building_2.svg';
import Building3 from '../../ui/assets/images/city/building_3.svg';
import Building4 from '../../ui/assets/images/city/building_4.svg';
import Building5 from '../../ui/assets/images/city/building_5.svg';
import Building6 from '../../ui/assets/images/city/building_6.svg';
import Building7 from '../../ui/assets/images/city/building_7.svg';
import Building8 from '../../ui/assets/images/city/building_8.svg';
import Building9 from '../../ui/assets/images/city/building_9.svg';
import Building10 from '../../ui/assets/images/city/building_10.svg';
import Building11 from '../../ui/assets/images/city/building_11.svg';
import Building12 from '../../ui/assets/images/city/building_12.svg';
import Building13 from '../../ui/assets/images/city/building_13.svg';
import Building14 from '../../ui/assets/images/city/building_14.svg';
import Building15 from '../../ui/assets/images/city/building_15.svg';
import Building16 from '../../ui/assets/images/city/building_16.svg';
import Building17 from '../../ui/assets/images/city/building_17.svg';
import Building18 from '../../ui/assets/images/city/building_18.svg';
import Building19 from '../../ui/assets/images/city/building_19.svg';
import Building20 from '../../ui/assets/images/city/building_20.svg';
import Building21 from '../../ui/assets/images/city/building_21.svg';
import Building22 from '../../ui/assets/images/city/building_22.svg';
import Building23 from '../../ui/assets/images/city/building_23.svg';
import Building24 from '../../ui/assets/images/city/building_24.svg';
import Building25 from '../../ui/assets/images/city/building_25.svg';
import Building26 from '../../ui/assets/images/city/building_26.svg';
import Building27 from '../../ui/assets/images/city/building_27.svg';
import Building28 from '../../ui/assets/images/city/building_28.svg';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const CityMap:NextPage = () => {
    const buildings = [Building1, Building2, Building3, Building4, Building5, Building6, Building7, Building8, Building9, Building10, Building11, Building12, Building13, Building14, Building15, Building16, Building17, Building18, Building19, Building20, Building21, Building22, Building23, Building24, Building25, Building26, Building27, Building28];
    const gridSize = { x: 10, y: 10 };
    const [cityMap, setMap] = useState<Array<Array<any>>>([]);

    useEffect(() => {
        for (let i = 0; i < gridSize.x; i++) {
            if (!cityMap[i]) cityMap[i] = [] as any[];
            for (let j = 0; j < gridSize.y; j++)
                cityMap[i][j] = buildings[Math.floor(Math.random() * buildings.length)];
        }
        setMap(cityMap)
    }, [])

    return (
        <div className='absolute top-0 left-0 w-full h-full building flex flex-wrap flex-row'>
            {cityMap.map((row, index) => {
                return row.map((col, i) => {
                    return (<img className="w-24" src={col.src} alt="building" key={index + i}/>);
                })
            })}
        </div>
    );
};

export default CityMap