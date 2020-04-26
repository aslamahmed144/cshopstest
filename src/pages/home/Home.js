import React, {useContext, useEffect, memo} from 'react';
import {Row} from 'react-bootstrap';
import Product from '../../components/Product';
import SideNav from '../../components/SideNav';
import Banner from '../../components/Banner';
import ErrorBoundary from '../../components/ErrorBoundary';
import axios from 'axios';
import {loaderBar} from '../../methods/methods';

import Filterbox from '../../components/Filterbox';
import {AppContext} from '../../App';

const Home = ()=>{
	const {data, dispatch} = useContext(AppContext);	

	useEffect(()=>{
		if(!data.products){
			loaderBar(true)
			axios.get(`${data.API_URL}/product/products`).then((res)=>{			
				dispatch({type:'FETCH_PRODUCTS', payload:res.data})
				loaderBar(false)
			})			
		}
	},[])
	
	return(
		<main className="home">
			<div className="container-fluid">
				<Row>
					<div className="col-lg-2 sidenavecol">
						<SideNav>
							
						</SideNav>
					</div>
					<div className="col-lg-10">
						<Banner />
						<Filterbox />
						<div className="row no-gutters">
						<ErrorBoundary>
							{
								data.products? data.products.map((item)=>{
									return <Product product={item} key={item.id} />
								}) :null
							}
						</ErrorBoundary>
						</div>
					</div>
				</Row>
			</div>
		</main>
		)
}

export default memo(Home);