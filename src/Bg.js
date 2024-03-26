
import './Bg.css';
import close from './assets/close.png';
import Download from './Download'
import bunner from './assets/banner.png'
import logo from './assets/logo.png'


import { useState } from "react";
import Disp_img from './Disp_img';

function Bg() {

  const [selected_tab, setselected_tab] = useState(true);

  const [show_eula, setshow_eula] = useState(false);


  function selected(){
    setselected_tab(!selected_tab);
  }

  function show_popup_eula(){
    setshow_eula(!show_eula);
  }

  return (
    <div >
      
        <div className="bg_cont">
            <div className="header_title"> העלאת תמונה כדי להסיר את הרקע </div>
            <img src={close} className="close_top"/> 

            <div className="upload_btn"> העלאת תמונה  </div>


            <div className="content_div">
                <div className="content_left">

                    <div className="tabs_cont">
                        <div className={"tabs_text text_bg_no_bg" + (selected_tab==true ? ' border_bottom_selected' : '')} onClick={selected}> הוסר רקע </div>
                        <div className={"tabs_text text_bg_orig" + (selected_tab!=true ? ' border_bottom_selected' : '')} onClick={selected}> מקורי </div>
                    </div>

                  <div className="content_left_middle">
                       {selected_tab==true ?  <Disp_img comp_type="no_bg_comp"></Disp_img> :  <Disp_img comp_type="orig_comp"></Disp_img> }
                  </div>

                  <div className='footer_left_content'>
                      <div className='footer_text'>
                      על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות
                      אתר זה מוגן וחלים בו מדניות ופרטיות
                      ותנאי השירות
                      </div>

                      <button className='footer_btn' onClick={show_popup_eula}> תקנון החברה </button>
                  </div>

                </div>
                <div className="content_right">

                  <div className="content_right_middle">
                        <Download title="תמונה חינם" desc="תצוגה מקדימה של תמונה" btn_text="הורד" small_text="איכות טובה עד 0.25 מגה פיקסל"  comp_side="top" ></Download>
                        <Download title="Pro" desc="תמונה מלאה" btn_text="HD הורד" small_text="האיכות הטובה ביותר עד 25 מגה פיקל" comp_side="bottom" ></Download>
                  </div>

                </div>
            </div>

            <div className='footer'>
                <img src={bunner} className='bunner_img'/>
                <img src={logo} className='logo_img' />
             </div>

            
        </div>

        {show_eula ==true ? <>
          <div className='overlay'> </div>

          <div className='popup_eula'>
            <img src={close} onClick={show_popup_eula}/>


            <div className='popup_text'>
                d fgh ghj ghj hgjk 
                gdhfdgh
                d fgh ghj ghj hgjk 
                gdhfdgh
                d fgh ghj ghj hgjk 
                gdhfdgh
                d fgh ghj ghj hgjk 
                gdhfdgh
                d fgh ghj ghj hgjk 
                gdhfdgh
                d fgh ghj ghj hgjk 
                gdhfdgh
            </div>
          </div>
        </>
        : <> </>}

      </div> 
  );
}

export default Bg;
