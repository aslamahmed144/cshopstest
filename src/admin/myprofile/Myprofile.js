import React, {useState, useEffect, useContext, lazy} from 'react';
import axios from 'axios';
import {AppContext} from '../../App';
import {getToken} from '../../methods/methods';
import Hocpanel from '../components/Hocpanel';
import {useToasts } from 'react-toast-notifications';

import Contactinfo from '../../components/Contactinfo';
const Contactinfoform = lazy(()=> import('../../components/Contactinfoform'));

const Myprofile=()=>{
	const {data} = useContext(AppContext)
	const [contact, setContact] = useState();
	const [cInfo, setCinfo] = useState();
	const { addToast } = useToasts();	
	let errorSetting = { appearance: 'error', autoDismiss:true,  autoDismissTimeout :2000 }

	useEffect(()=>{
		getContactInfo()
	},[])
	
	function formValidation(){
		let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let phoneno = /^\d{10}$/;
		if(!contact.name){
			addToast('Please enter full name', errorSetting)
			return false
		}
		else if(!phoneno.test(contact.phone)){
			addToast('Not a valid Phone Number', errorSetting)
			return false
		}		
		else if(!mailformat.test(contact.email)){
			addToast('Please enter email', errorSetting)
			return false
		}
		if(!contact.address){
			addToast('Please enter address', errorSetting)
			return false
		}
		else if(!contact.country){
			addToast('Please select country', errorSetting)
			return false
		}
		else if(!contact.state){
			addToast('Please select state', errorSetting)
			return false
		}
		else if(!contact.city){
			addToast('Please select city', errorSetting)
			return false
		}		
		else if(!contact.name){
			addToast('Please enter name', errorSetting)
			return false
		}		
		else if(!contact.pincode){
			addToast('Please enter pincode', errorSetting)
			return false
		}
		else{
			return true
		}
	}

	function setContactData(data){
		setContact(data)
	}
	function saveContact(){
		let validate = formValidation()
		if(validate){
			axios.post(`${data.API_URL}/myprofile/contact_info`, contact, getToken() ).then((res)=>{
				getContactInfo()
			})			
		}
	}
	function getContactInfo(){
		axios.get(`${data.API_URL}/myprofile/contact_info`, getToken() ).then((res)=>{
			setCinfo(res.data[0])
		})
	}
	
	return (
			<div className="adminpanel">
				<div className="p-2">
					<div className="card">
						<div className="card-body">						
							{
								!cInfo? 
									<div>
										<Contactinfoform infodata={setContactData}/>
										<div className="d-flex justify-content-end">
											<button className="btn btn-sm btn_orange" onClick={e=>saveContact(e)}>Save</button> 
										</div>
									</div>
								:null
							}
							{cInfo? <Contactinfo data={cInfo} /> :null}							
						</div>
					</div>
				</div>
			</div>
		)
}

export default Hocpanel(Myprofile)