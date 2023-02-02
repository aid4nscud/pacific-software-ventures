import { useEffect, useState } from 'react';
import './App.scss';
import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx';

const options = ['About Us', 'Services', 'Our Work', 'Work with us'];
export const App = () => {
	const [selected, setSelected] = useState(3);
	const [leftWidth, setLeftWidth] = useState(62.5);
	const [rightWidth, setRightWidth] = useState(0);
	const [arrowDown, setArrowDown] = useState(true);

	useEffect(() => {
		if (selected === 0) {
			setLeftWidth(0);
			setRightWidth(60);
		} else if (selected === 1) {
			setLeftWidth(20);
			setRightWidth(40);
		} else if (selected === 2) {
			setLeftWidth(40);
			setRightWidth(20);
		} else {
			setLeftWidth(60);
			setRightWidth(0);
		}
	}, [selected]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY < window.innerHeight / 2) {
				setArrowDown(true);
			} else {
				setArrowDown(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const renderDropDown = () => {
		switch (selected) {
			case 0:
				return <AboutDropDown />;
			case 1:
				return <ServicesDropDown />;
			default:
				return null;
		}
	};

	return (
		<div className="container">
			<div className="heroText">
				<div className="title">Pacific Software Ventures</div>
				<div className="subtitle">
					From idea to execution, we bring your vision to life
				</div>
			</div>

			<div className="optionsContainer">
				{options.map((option, i) => {
					return (
						<div
							onClick={() => setSelected(i)}
							className={
								i === selected ? 'optionCircle option-selected' : 'optionCircle'
							}
						>
							<span style={{ padding: '1rem' }}>{option}</span>
							{selected === i && renderDropDown()}
						</div>
					);
				})}
			</div>

			<div className="dynamicContainer">
				<div
					style={{ width: `${leftWidth}%`, opacity: selected !== 0 ? 1 : 0 }}
				/>
				<div
					style={{ width: `${rightWidth}%`, opacity: selected !== 3 ? 1 : 0 }}
				/>
			</div>
			{/* <div className="bottomSectionContainer">
				<div className="arrowButton">
					{arrowDown ? (
						<RxDoubleArrowDown size={'32px'} />
					) : (
						<RxDoubleArrowUp size={'32px'} />
					)}
				</div>
			</div> */}
		</div>
	);
};

const AboutDropDown = () => {
	return (
		<div style={{ fontSize: '1vw', fontWeight: 'normal', height: '75%' }}>
			At Pacific Software Ventures, we are a premier provider of custom software
			and design solutions. Our expert team of developers and designers utilize
			cutting-edge technology and innovative thinking to bring our clients'
			ideas to life.
			<br />
			<br />
			We are dedicated to delivering exceptional results and staying at the
			forefront of the industry. Our team constantly updates their skills and
			knowledge to ensure that we provide the best possible solutions to our
			clients. We take pride in our ability to tackle complex projects and are
			always eager to work on innovative ideas.
			<br />
			<br />
			We believe in the transformative power of technology and design and are
			committed to helping our clients achieve their goals and bring their ideas
			to life. Partner with us to bring your vision to reality and take your
			business to the next level.
		</div>
	);
};

const ServicesDropDown = () => {
	return (
		<div style={{ fontSize: '1vw', fontWeight: 'normal', height: '75%' }}>
			Pacific Software Ventures provides full-stack development and design
			services for both web and mobile applications. Our team of expert
			developers and designers are equipped with the latest technology and
			design techniques to deliver custom solutions that meet the unique needs
			of your business.
			<br />
			<br />
			We are committed to delivering solutions that meet your unique needs and
			exceed your expectations. Contact us to learn more about our services and
			how we can help bring your ideas to life.
		</div>
	);
};

export default App;
