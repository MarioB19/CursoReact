
import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle = "La tierra explota", name}) => {
 
  return (
    <>

    <h1> {title}</h1>
    <h2>{subTitle}</h2>

    <p>{name}</p>
    </>

  )}
  
  FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.number.isRequired
  }

  FirstApp.defaultProps = {
    title : "No hay titulo",
    subTitle: "No hay subtitulo",
    name: "Mario"
  }