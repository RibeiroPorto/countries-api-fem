import './topComponent.css'

function TopSection({func}) {
    

    return (<div className='top-component'>
        <p>Where in The World ?</p>

        <button onClick={func} className='DarkMode_Button'>
            <i className="far fa-moon white"></i>
            <i className="fas fa-moon dark"></i>

            <p> Dark mode</p>
        </button>


    </div>)
}
export default TopSection