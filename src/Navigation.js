// Navigation.js

// import React, { useState } from 'react';
import { Tooltip } from 'antd';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai'

const Navigation = () => {
    // const text = <span>Watchlist</span>;
    return (
        <nav>
            <div className='nav_bar'>
                <p>
                    <Link className='a' href='/movies'>Latest Movies</Link>
                </p>
                <p>
                    <Tooltip title='Watchlist' placement='right'>
                        <Link className='a' href="/watchlist"><AiFillHeart
                            style={{ color: 'red' }} size={35} /></Link>
                    </Tooltip>
                </p>
            </div>
        </nav>
    );
};

export default Navigation;
