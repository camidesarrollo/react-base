import React from 'react';
import PropTypes from '../utils/propTypes';

import bn from '../utils/bemnames';

// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import {
  MdCalendarToday
} from 'react-icons/md';
import Typography from './Typography';

const bem = bn.create('page');

const Page = ({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  return (
    <Tag className={classes} {...restProps}>
      {/* <div className='col-12'>
        <div className={bem.e('header')}>
          {title && typeof title === 'string' ? (
            <Typography type="h3" className={bem.e('title')}>
              {title}
            </Typography>
          ) : (
            title
          )}
          {breadcrumbs && (
            <Breadcrumb className={bem.e('breadcrumb')}>
              <BreadcrumbItem>Home</BreadcrumbItem>
              {breadcrumbs.length &&
                breadcrumbs.map(({ name, active }, index) => (
                  <BreadcrumbItem key={index} active={active}>
                    {name}
                  </BreadcrumbItem>
                ))}
            </Breadcrumb>
          )}
        </div>
      </div>

      {children} */}
      <div className="row">
        <div className="col-12">
          <div className="page_title_box d-flex flex-wrap align-items-center justify-content-between">
            <div className="page_title_left d-flex align-items-center">
              {title && typeof title === 'string' ? (
                <Typography type="h3" className={bem.e('title')}>
                  {title}
                </Typography>
              ) : (
                title
              )}
              <ol className="breadcrumb page_bradcam mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Analytic</li>
              </ol>
            </div>
            <div className="page_title_right">
              <div className="page_date_button d-flex align-items-center">
                <MdCalendarToday />
                August 1, 2020 - August 31, 2020
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </Tag>
  );
};

Page.propTypes = {
  tag: PropTypes.component,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
};

Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default Page;
