import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return <> 
                <h2>{title}</h2>
                {children}
            </>
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}