// PersonalWebSite\Portfolio-frontend\src\common\page-animation.jsx

import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimationWrapper = ({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className,
}) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={keyValue}
          initial={initial}
          animate={animate}
          transition={transition}
          className={className}>
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

// PropTypes for the AnimationWrapper component
AnimationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  keyValue: PropTypes.string.isRequired,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object,
  className: PropTypes.string,
};

export default AnimationWrapper;
