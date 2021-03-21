import React from 'react'
import BarCharts from './barCharts';
import CircleScore from './CircleScore';
import Timeline from './Timeline'




export default function ProfilSummary() {
    return (
        <div className="profilSummary">
            <div className="profilSummary__top">
                <div className="flex">
                    <div className="profilSummary__top__profileDesc">
                        <h3 className="profilSummary__top__profileDesc__name">John doe, 24</h3>
                        <div className="profilSummary__top__profileDesc__date">
                            <div>
                                <p className="profilSummary__top__profileDesc__date__label">Years</p>
                                <p className="profilSummary__top__profileDesc__date__value">01</p>
                            </div>
                            <div>
                                <p className="profilSummary__top__profileDesc__date__label">Months</p>
                                <p className="profilSummary__top__profileDesc__date__value">04</p>
                            </div>
                            <div>
                                <p className="profilSummary__top__profileDesc__date__label">Days</p>
                                <p className="profilSummary__top__profileDesc__date__value">24</p>
                            </div>
                        </div>
                    </div>
                    <div className="profilSummary__circle">
                        <CircleScore score={41}/>
                    </div>
                </div>
                <BarCharts />
            </div>
            <Timeline />
        </div>
    )
}


