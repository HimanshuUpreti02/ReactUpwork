import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Countries from '../utils';
import "../formInput.styles.scss";
import "../resume.styles.scss"
import { getStates } from 'country-state-picker';
import { Link, useNavigate } from 'react-router-dom';
import { uid } from "uid"
import { set, ref as sRef } from "firebase/database"
import { auth, db } from '../utils/firebase/firebase.utils';
import ReactDOMServer from 'react-dom/server';




// import axios from 'axios';



const NameDetails = () => {
    const navigate = useNavigate();

    // useEffect(()=>{
    //     // curl 'https://docs-examples.firebaseio.com/fireblog/posts.json?print=pretty'
    // },[])

    const [showResume, setShowResume] = useState(false);
    const [countries, setCountries] = useState(Countries);

    const [final, setFinal] = useState(false);
    const [isBasic, setIsBasic] = useState(true);
    const [resumeDesc, setResumeDesc] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Country, setCountry] = useState("");
    const [states, setStates] = useState([]);
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState(null);
    const [number, setNumber] = useState(null);
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");
    const [highestEducation, setHighestEducation] = useState("");
    const [showTier, setShowTier] = useState(false);
    const [avgExp, setavgExp] = useState(null);


    const [isEducation1, setIsEducation1] = useState(false);
    const [isEducation2, setIsEducation2] = useState(false);
    const [Education2, showEducation2] = useState(false);
    const [university, setUniversity] = useState("");
    const [Degree, setDegree] = useState("");
    const [majors, setMajors] = useState("");
    const [gpa, setGpa] = useState(null);
    const [startDate1, setStartDate1] = useState("")
    const [endDate1, setEndDate1] = useState("");
    const [university2, setUniversity2] = useState("");
    const [Degree2, setDegree2] = useState("");
    const [majors2, setMajors2] = useState("");
    const [gpa2, setGpa2] = useState(null);
    const [startDate2, setStartDate2] = useState("")
    const [endDate2, setEndDate2] = useState("");
    const [save, setIsSave] = useState(true);

    const [workExp, setWorkExp] = useState(true);
    const [isWork1, setisWork1] = useState(false);
    const [isWork2, setIsWork2] = useState(false);
    const [showWork2, setShowWork2] = useState(false);
    const [company1, setCompany1] = useState("");
    const [location1, setLocation1] = useState("");
    const [position1, setPositon1] = useState("");
    const [experience1, setExperience1] = useState("");
    const [description1, setDescription1] = useState("");
    const [company2, setCompany2] = useState("");
    const [location2, setLocation2] = useState("");
    const [position2, setPositon2] = useState("");
    const [experience2, setExperience2] = useState("");
    const [description2, setDescription2] = useState("");
    const [workStartDate1, setWorkStartDate1] = useState("")
    const [workStartDate2, setWorkStartDate2] = useState("")
    const [workEndDate1, setWorkEndDate1] = useState("")
    const [workEndDate2, setWorkEndDate2] = useState("")


    const [isGeneral, setIsGeneral] = useState(false);
    const [Auth, setAuth] = useState("");
    const [Visa, setVisa] = useState("");
    const [isGeneral2, setIsGeneral2] = useState(false);
    const [ethnicity, setEthnicity] = useState("");
    const [disable, setDisable] = useState("");
    const [veteran, setVeteran] = useState("");
    const [lgbt, setLgbt] = useState("");
    const [gender, setGender] = useState("");

    const [id, setId] = useState(uid());
    const [flag, setFlag] = useState(0);


    const [isExtraDetails, setIsExtraDetails] = useState(false);
    const [linkedinEmail, setLinkedinEmail] = useState("");
    const [carrerBuilderEmail, setCarrerBuilderEmail] = useState("");
    const [ZipRecruiterEmail, setZipRecruiterEmail] = useState("");
    const [linkedinPass, setLinkedinPass] = useState("");
    const [carrerBuilderPass, setCarrerBuilderPass] = useState("");
    const [ZipRecruiterPass, setZipRecruiterPass] = useState("");

    const gobackfromresume = () => {
        setShowResume(false);
        setIsExtraDetails(true);
    }

    const goToLast = () => {
        setShowResume(false);
        setFinal(true);
    }

    const PdfJSX = () => {
        return (
            <>
                <div class="container">
                    <div class="header">
                        <div class="full-name">
                            <span class="first-name">{firstName} {lastName}</span>
                            {/* <span class="last-name">Doe</span> */}
                        </div>

                        <div>
                            <p>{resumeDesc}</p>
                        </div>
                        <div class="contact-info">
                            <span class="email">Email:  </span>
                            <span class="email-val">{email}</span>
                            {/* <span class="separator"></span> */}
                            {/* <span class="phone">Phone: </span>
                            <span class="phone-val">{number}</span> */}
                        </div>

                        <div class="contact-info">
                            <span class="email-val">{Country}, </span>
                            <span class="email-val">{state}</span>
                            <span class="separator"></span>
                            <span class="phone">Phone: </span>
                            <span class="phone-val">{number}</span>
                        </div>

                        {/* <div class="about">
                            <span class="position">Front-End Developer </span>
                            <span class="desc">
                                I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.
                            </span>
                        </div> */}
                    </div>
                    <div class="details">

                        <div class="section">
                            <div class="section__title">Education</div>
                            <div class="section__list">
                                <div class="section__list-item">
                                    <div class="left">
                                        <div class="name">{university}</div>
                                        <div class="addr">{Degree} - {majors}</div>
                                        <div class="duration">{startDate1} - {endDate1}</div>
                                    </div>
                                    <div class="right">
                                        <div class="name">GPA</div>
                                        <div class="desc">{gpa}</div>
                                    </div>
                                </div>
                                {showEducation2 && <div class="section__list-item">
                                    <div class="left">
                                        <div class="name">{university2}</div>
                                        <div class="addr">{Degree2} - {majors2}</div>
                                        <div class="duration">{startDate2} - {endDate2}</div>
                                    </div>
                                    <div class="right">
                                        <div class="name">GPA</div>
                                        <div class="desc">{gpa2}</div>
                                    </div>
                                </div>}

                            </div>

                        </div>
                        <div class="section">
                            <div class="section__title">Experience</div>
                            <div class="section__list">
                                <div class="section__list-item">
                                    <div class="left">
                                        <div class="name">{company1} - {position1}</div>
                                        <div class="addr">{location1}</div>
                                        <div class="desc">{description1}</div>
                                    </div>
                                    <div class="right">
                                        <div>DURATION</div>
                                        <div class="duration">{workStartDate1} - {workEndDate1}</div>

                                    </div>
                                </div>
                                {showWork2 && <div class="section__list-item">
                                    <div class="left">
                                        <div class="name">Akount</div>
                                        <div class="addr">San Monica, CA</div>
                                        <div class="duration">Jan 2011 - Feb 2015</div>
                                    </div>
                                    <div class="right">
                                        <div class="name">Fr developer</div>
                                        <div class="desc">did This and that</div>
                                    </div>
                                </div>}

                            </div>
                        </div>

                        {/* <div class="section">
                            <div class="section__title">Projects</div>
                            <div class="section__list">
                                <div class="section__list-item">
                                    <div class="name">DSP</div>
                                    <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
                                </div>

                                <div class="section__list-item">
                                    <div class="name">DSP</div>
                                    <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}



                    </div>

                </div>
                {/* <button onClick={gobackfromresume}>prev</button> */}
                <div className='d-flex justify-content-center'>

                    <button className='btn btn-secondary my-3 mx-5' onClick={gobackfromresume}>Previous</button>

                    <button className='btn btn-secondary my-3 mx-5' onClick={writeToDatabase}>Next</button>
                </div>

            </>

        )
    }


    console.log(isEducation2)
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleCountrySelect = (e) => {
        const countryName = (Countries.find((country) => country.code === `${e.target.value}`)).name
        setCountry(countryName)
        setStates(getStates(e.target.value.toLowerCase()));
    }

    const handleStateChange = (e) => {
        setState(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }

    const handleJob = (e) => {
        setJob(e.target.value);
    }

    const showEducation = () => {
        setIsBasic(false);
        setIsEducation1(true);
        if (Education2) {
            setIsEducation2(true);
            setIsSave(false)
        }
    }

    const handleUniversity = (e) => {
        setUniversity(e.target.value);
    }

    const handleDegree = (e) => {
        setDegree(e.target.value);
    }

    const handleMajors = (e) => {
        setMajors(e.target.value);
    }

    const handleGpa = (e) => {
        setGpa(e.target.value);
    }

    const handleUniversity1 = (e) => {
        setUniversity2(e.target.value);
    }

    const handleDegree1 = (e) => {
        setDegree2(e.target.value);
    }

    const handleMajors1 = (e) => {
        setMajors2(e.target.value);
    }

    const handleGpa1 = (e) => {
        setGpa2(e.target.value);
    }

    const handleAddEducation = () => {
        setIsEducation2(true);
        showEducation2(true);
        setIsSave(false);
    }

    const handleRemoveEducation = () => {
        setIsEducation2(false);
        setIsSave(true)
        showEducation2(false);
    }

    const goBackToBasic = () => {
        setIsEducation1(false);
        if (isEducation2) {
            showEducation2(true);
            setIsEducation2(false);
        }
        setIsBasic(true);
    }

    const goToWork = () => {
        setIsEducation1(false);
        if (isEducation2) {
            showEducation2(true);
            setIsEducation2(false);
        }
        setisWork1(true);
        if (showWork2) setIsWork2(true);
    }

    const goBackToEducation = () => {
        setisWork1(false);
        setIsWork2(false);
        setIsEducation1(true);
        if (Education2) {
            setIsEducation2(true);
        }
    }

    const handleRadioChange = (e) => {
        if (e.target.checked == true) {
            setisWork1(false);
            goToGeneral();
            setWorkExp(false);
        } else {
            setWorkExp(true);
        }
    }

    const addWork = () => {
        setIsWork2(true);
        setShowWork2(true);
    }

    const removeWork = () => {
        setIsWork2(false);
    }

    const handleCompanyOneChange = (e) => {
        setCompany1(e.target.value);
    }

    const handleLocationOneChange = (e) => {
        setLocation1(e.target.value);
    }

    const handlePositionOneChange = (e) => {
        setPositon1(e.target.value)
    }

    const handleExperienceOneChange = (e) => {
        setExperience1(e.target.value);
    }

    const handleDescOneChange = (e) => {
        setDescription1(e.target.value);
    }


    const handleCompanyTwoChange = (e) => {
        setCompany2(e.target.value);
    }

    const handleLocationTwoChange = (e) => {
        setLocation2(e.target.value);
    }

    const handlePositionTwoChange = (e) => {
        setPositon2(e.target.value)
    }

    const handleExperienceTwoChange = (e) => {
        setExperience2(e.target.value);
    }

    const handleDescTwoChange = (e) => {
        setDescription2(e.target.value);
    }

    const goToGeneral = () => {
        setisWork1(false);
        if (showWork2) {
            setIsWork2(false);
        }
        setIsGeneral(true);
    }

    const handleAuthChange = (e) => {
        setAuth(e.target.value);
        console.log(Auth);
    }

    const handleVisaChange = (e) => {
        console.log(e.target.value)
        setVisa(e.target.value);
        console.log(Visa);
    }

    const goBackToWork = () => {
        setIsGeneral(false);
        setisWork1(true);
        if (showWork2) {
            setIsWork2(true);
        }
    }

    const goToGeneral2 = () => {
        setIsGeneral(false);
        setIsGeneral2(true);
    }

    const handleEthnicityChange = (e) => {
        setEthnicity(e.target.value)
    }

    const handleDisabilityChange = (e) => {
        setDisable(e.target.value);
    }

    const handleVeterenChange = (e) => {
        setVeteran(e.target.value);
    }

    const handleLgbtqChange = (e) => {
        setLgbt(e.target.value);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const goBackToGeneral1 = () => {
        setIsGeneral2(false);
        setIsGeneral(true);
    }

    const goToSkills = () => {
        setIsGeneral2(false);
    }

    const handleZipCode = (e) => {
        setZipCode(e.target.value)
    }


    const handleStartDateOneChange = (e) => {
        setStartDate1(e.target.value);
        console.log(e)
    }

    const handleEndDateOneChange = (e) => {
        setEndDate1(e.target.value);
    }

    const handleEndDateTwo = (e) => {
        setEndDate2(e.target.value);
    }
    const handleStartDateTwo = (e) => {
        setStartDate2(e.target.value);
    }

    const handleWorkOneStartDate = (e) => {
        setWorkStartDate1(e.target.value)
    }

    const handleWorkTwoStartDate = (e) => {
        setWorkStartDate2(e.target.value)
    }

    const handleWorkOneEndDate = (e) => {
        setWorkEndDate1(e.target.value)
    }
    const handleWorkTwoEndDate = (e) => {
        setWorkEndDate2(e.target.value)
    }

    const handleResumeDesc = (e) => {
        setResumeDesc(e.target.value)
    }

    const writeToDatabase = () => {
        setShowResume(false);
        setFinal(true);

        setIsExtraDetails(false);
        // setShowResume(true);
        const printElement = ReactDOMServer.renderToString(PdfJSX());

        if (!auth.currentUser) {
            // const uidd = uid();
            setId(uid());
            set(sRef(db, `${auth.currentUser.uid}/${id}`), {
                firstName: firstName,
                lastName: lastName,
                country: Country,
                state: state,
                zipCode: zipCode,
                number: number,
                job, job,
                university1: university,
                Degree1: Degree,
                majors1: majors,
                gpa1: gpa,
                startDate1: startDate1.toString(),
                endDate1: endDate1.toString(),
                university2: university2,
                Degree2: Degree2,
                majors2: majors2,
                gpa2: gpa2,
                startDate2: startDate2.toString(),
                endDate2: endDate2.toString(),
                workExperience: workExp,
                company1: company1,
                location1: location1,
                position1: position1,
                experience1: experience1,
                workStartDate1: workStartDate1.toString(),
                workEndDate1: workEndDate1.toString(),
                description1: description1,
                company2: company2,
                location2: location2,
                position2: position2,
                experience2: experience2,
                workStartDate2: workStartDate2.toString(),
                workEndDate2: workEndDate2.toString(),
                description2: description2,
                auth: Auth,
                visa: Visa,
                ethnicity: ethnicity,
                disable: disable,
                veteran: veteran,
                lgbt: lgbt,
                gender: gender,
                city: city,
                email: email,
                resumeDesc: resumeDesc,
                linkedinEmail: linkedinEmail,
                linkedinPass: linkedinPass,
                carrerBuilderEmail: carrerBuilderEmail,
                carrerBuilderPass: carrerBuilderPass,
                ZipRecruiterEmail: ZipRecruiterEmail,
                ZipRecruiterPass: ZipRecruiterPass,
                htmlData: printElement,
                avgExp : avgExp,
                flag: flag,
                uidd: id,
            })
        } else {
            set(sRef(db, `${auth.currentUser.uid}/${id}`), {
                firstName: firstName,
                lastName: lastName,
                country: Country,
                state: state,
                zipCode: zipCode,
                number: number,
                job, job,
                university1: university,
                Degree1: Degree,
                majors1: majors,
                gpa1: gpa,
                startDate1: startDate1.toString(),
                endDate1: endDate1.toString(),
                university2: university2,
                Degree2: Degree2,
                majors2: majors2,
                gpa2: gpa2,
                resumeDesc: resumeDesc,
                startDate2: startDate2.toString(),
                endDate2: endDate2.toString(),
                workExperience: workExp,
                company1: company1,
                location1: location1,
                position1: position1,
                experience1: experience1,
                workStartDate1: workStartDate1.toString(),
                workEndDate1: workEndDate1.toString(),
                description1: description1,
                company2: company2,
                location2: location2,
                position2: position2,
                experience2: experience2,
                workStartDate2: workStartDate2.toString(),
                workEndDate2: workEndDate2.toString(),
                description2: description2,
                auth: Auth,
                visa: Visa,
                ethnicity: ethnicity,
                disable: disable,
                veteran: veteran,
                lgbt: lgbt,
                gender: gender,
                city: city,
                email: email,
                linkedinEmail: linkedinEmail,
                linkedinPass: linkedinPass,
                carrerBuilderEmail: carrerBuilderEmail,
                carrerBuilderPass: carrerBuilderPass,
                ZipRecruiterEmail: ZipRecruiterEmail,
                ZipRecruiterPass: ZipRecruiterPass,
                htmlData: printElement,
                avgExp : avgExp,
                flag: flag,
                uidd: id,
            })
        }

        // navigate("/resume")

    }

    const handleAvgExp = (e)=>{
        setavgExp(e.target.value);
    }

    const goToExtraDetails = () => {
        setIsGeneral2(false);
        setIsExtraDetails(true);

    }

    const handleLinkedinMail = (e) => {
        setLinkedinEmail(e.target.value);
    }

    const handleLinkedinPass = (e) => {
        setLinkedinPass(e.target.value);
    }

    const handleCbMail = (e) => {
        setCarrerBuilderEmail(e.target.value);
    }
    const handleCbPass = (e) => {
        setCarrerBuilderPass(e.target.value);
    }
    const handleZipMail = (e) => {
        setZipRecruiterEmail(e.target.value);
    }
    const handleZipPass = (e) => {
        setZipRecruiterPass(e.target.value);
    }


    const goBackToGeneral2 = () => {
        setIsExtraDetails(false);
        setIsGeneral2(true);
    }

    const handleHighestEducation = (e) => {
        setHighestEducation(e.target.value);
    }

    const goTotier = () => {
        setIsExtraDetails(false);
        setShowResume(true);
    }

    const goBackToExtra = () => {
        setIsExtraDetails(true);
    }


    return (
        <>
            {/* Basic Details */}
            {isBasic &&
                <div>
                    <h2 className='d-flex justify-content-center mb-5 text-info'>Basic Details</h2>
                    <div className='d-flex justify-content-around my-5'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                            className=" w-50 mx-3"
                        >
                            <Form.Control type="text" value={firstName} onChange={handleFirstName} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className=' w-50 mx-3'>
                            <Form.Control type="text" value={lastName} onChange={handleLastName} />
                        </FloatingLabel>

                        <div className="form-floating w-50 mx-3 ">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={handleCountrySelect}>
                                <option>{Country}</option>
                                {countries.map((country, index) => {
                                    return <option className='position-relative' value={country.code} key={index}  >{country.name}</option>
                                })}
                            </select>
                            <label for="floatingSelectGrid">Country</label>
                        </div>
                    </div>,

                    <div className='d-flex justify-content-around mb-10'>
                        <div className="form-floating w-25 mx-3 ">
                            <select className="form-select" id="floatingSelectGrid" value={state} aria-label="Floating label select example" onChange={handleStateChange}>
                                <option ></option>
                                {states.map((state, index) => {
                                    return <option value={state} key={index} >{state}</option>
                                })}
                            </select>
                            <label for="floatingSelectGrid">State</label>
                        </div>

                        <div className='w-50'>
                            <FloatingLabel controlId="floatingInput" label="City" className='mb-3 mx-3'>
                                <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                            </FloatingLabel>
                        </div>
                        <div className='w-25'>
                            <FloatingLabel controlId="floatingInput" label="ZIP CODE" className='mb-3  mx-3'>
                                <Form.Control type="text" value={zipCode} onChange={handleZipCode} />
                            </FloatingLabel>
                        </div>



                    </div>

                    <div className='d-flex justify-content-around my-5'>

                        <div className='w-100'>
                            <FloatingLabel controlId="floatingInput" label="Email" className='mb-3 mx-3'>
                                <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FloatingLabel>
                        </div>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Mobile"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="telephone" value={number} onChange={handleNumberChange} />
                        </FloatingLabel>



                        <div className="form-floating w-50 mx-3 ">
                            <select className="form-select" id="floatingSelectGrid" value={highestEducation} aria-label="Floating label select example" onChange={handleHighestEducation}>
                                <option></option>
                                <option value="Full Time">High School</option>
                                <option value="Part Time">Bachelors</option>
                                <option value="Contract">Masters</option>
                                <option value="Contract">Phd</option>
                            </select>
                            <label for="floatingSelectGrid">Highest Education</label>
                        </div>



                    </div>

                    <div className='d-flex justify-content-center mb-3'>
                        <FloatingLabel controlId="floatingInput" label="Job listing that you are searching for" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" value={job} onChange={handleJob} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Brief About Yourself" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" as="textarea" value={resumeDesc} onChange={handleResumeDesc} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Average Experience" className=' w-50 mx-3'>
                            <Form.Control type="number" value={avgExp} onChange={handleAvgExp} />
                        </FloatingLabel>
                    </div>



                    <div className='col text-center'>

                        <Link className=' btn btn-info' onClick={showEducation} >Save And Continue</Link>
                    </div>
                </div>
            }

            {/* Education details */}

            {isEducation1 &&
                <div >
                    <div className='d-flex justify-content-center'>
                        <h2 className='d-flex justify-content-center mb-5 text'>Education Details</h2>
                    </div>
                    <div className='d-flex mx-3 justify-content-between'>
                        <h3 className='text-center my-3'>Education 1</h3>
                        <div className='text-center'>
                            <button className='btn btn-info mx-3 my-3' onClick={handleAddEducation}>+</button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Institute"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={university} onChange={handleUniversity} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Degree" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" value={Degree} onChange={handleDegree} />
                        </FloatingLabel>
                    </div>

                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Majors"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={majors} onChange={handleMajors} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="GPA" className='mb-3 w-50 mx-3'>
                            <Form.Control type="number" value={gpa} onChange={handleGpa} />
                        </FloatingLabel>

                    </div>
                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel controlId="floatingInput" label="Start Date" className='mb-3 w-50 mx-3' onChange={handleStartDateOneChange}>
                            <Form.Control type="date" value={startDate1} />
                        </FloatingLabel><FloatingLabel controlId="End Date" label="End Date" className='mb-3 w-50 mx-3' onChange={handleEndDateOneChange}>
                            <Form.Control type="date" value={endDate1} />
                        </FloatingLabel>
                    </div>

                </div>
            }

            {isEducation2 &&
                <div >
                    <div className='d-flex my-3 mx-3 justify-content-between'>

                        <h3 className='mx-3'>Education 2</h3>
                        <div className='text-center'>
                            <button className='btn btn-info mx-3' onClick={handleRemoveEducation}>-</button>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                    </div>
                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Institute"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={university2} onChange={handleUniversity1} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Degree" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" value={Degree2} onChange={handleDegree1} />
                        </FloatingLabel>
                    </div>

                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Majors"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={majors2} onChange={handleMajors1} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="CGPA" className='mb-3 w-50 mx-3'>
                            <Form.Control type="number" value={gpa2} onChange={handleGpa1} />
                        </FloatingLabel>

                    </div>
                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel controlId="floatingInput" label="Start Date" className='mb-3 w-50 mx-3' onChange={handleStartDateTwo}>
                            <Form.Control type="date" value={startDate2} />
                        </FloatingLabel><FloatingLabel controlId="floatingInput" label="End Date" className='mb-3 w-50 mx-3' onChange={handleEndDateTwo}>
                            <Form.Control type="date" value={endDate2} />
                        </FloatingLabel>
                    </div>



                </div>
            }

            {(isEducation1 || isEducation2) && <div className='d-flex justify-content-around my-3'>
                <button className='btn btn-secondary' onClick={goBackToBasic}>Previous</button>
                <button className=' btn btn-success' onClick={goToWork} >Save And Continue</button>
            </div>}

            {/* Work Details */}

            {isWork1 &&
                <div>

                    <div className='d-flex justify-content-center'>
                        <h2>Work Experience</h2>
                    </div>



                    <div class="form-check mx-3">
                        <input class="form-check-input" type="checkbox" value={workExp} id="flexCheckDefault" onChange={handleRadioChange} />
                        <label class="form-check-label" for="flexCheckDefault">
                            I'm looking for my first Job (no prior Experience)
                        </label>
                    </div>


                    <div className='d-flex justify-content-between mx-3'>
                        <h2 className='mx-3'>Work Experience 1</h2>
                        <div>
                            <button className='btn btn-info mx-3' onClick={addWork}>+</button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                    </div>
                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Company"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={company1} onChange={handleCompanyOneChange} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Location" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" value={location1} onChange={handleLocationOneChange} />
                        </FloatingLabel>
                    </div>

                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Position"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={position1} onChange={handlePositionOneChange} />
                        </FloatingLabel>
                        {/* <FloatingLabel controlId="floatingInput" label="Experience" className='mb-3 w-50 mx-3'>
                            <Form.Control type="number" value={gpa2} onChange={handleGpa1} />
                        </FloatingLabel> */}

                        <div className="form-floating w-50 mx-3 ">
                            <select className="form-select" id="floatingSelectGrid" value={experience1} aria-label="Floating label select example" onChange={handleExperienceOneChange}>
                                <option></option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                            <label for="floatingSelectGrid">Experience Type</label>
                        </div>

                    </div>
                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel controlId="floatingInput" label="Start Date" className='mb-3 w-50 mx-3' onChange={handleWorkOneStartDate}>
                            <Form.Control type="date" value={workStartDate1} />
                        </FloatingLabel><FloatingLabel controlId="floatingInput" label="End Date" className='mb-3 w-50 mx-3' onChange={handleWorkOneEndDate}>
                            <Form.Control type="date" value={workEndDate1} />
                        </FloatingLabel>
                    </div>

                    <div className='d-flex justify-content-center mx-4'>
                        <FloatingLabel controlId="floatingInput" label="Description" className='mb-3 w-50 mx-3'>
                            <Form.Control value={description1} onChange={handleDescOneChange} type="text" as="textarea" rows={3} />
                        </FloatingLabel>
                    </div>
                </div>
            }

            {isWork2 &&
                <div>
                    <div className='d-flex justify-content-between mx-3'>
                        <h2 className='mx-3'>Work Experience 2</h2>
                        <div>
                            <button className='btn btn-secondary mx-3' onClick={removeWork}>-</button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                    </div>
                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Company"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={company2} onChange={handleCompanyTwoChange} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Location" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" value={location2} onChange={handleLocationTwoChange} />
                        </FloatingLabel>
                    </div>

                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Position"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={position2} onChange={handlePositionTwoChange} />
                        </FloatingLabel>

                        <div className="form-floating w-50 mx-3 ">
                            <select className="form-select" id="floatingSelectGrid" value={experience2} onChange={handleExperienceTwoChange} aria-label="Floating label select example">
                                <option></option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                            <label for="floatingSelectGrid">Experience Type</label>
                        </div>

                    </div>
                    <div className='d-flex justify-content-around my-2'>
                        <FloatingLabel controlId="floatingInput" label="Start Date" className='mb-3 w-50 mx-3' onChange={handleWorkTwoStartDate}>
                            <Form.Control type="date" value={workStartDate2} />
                        </FloatingLabel><FloatingLabel controlId="floatingInput" label="End Date" className='mb-3 w-50 mx-3' onChange={handleWorkTwoEndDate}>
                            <Form.Control type="date" value={workEndDate2} />
                        </FloatingLabel>
                    </div>

                    <div className='d-flex justify-content-center mx-4'>
                        <FloatingLabel controlId="floatingInput" label="Description" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" value={description2} onChange={handleDescTwoChange} as="textarea" rows={3} />
                        </FloatingLabel>
                    </div>


                </div>
            }

            {(isWork1 || isWork2) && <div className='d-flex justify-content-around my-3'>
                <button className='btn btn-secondary' onClick={goBackToEducation}>Previous</button>
                <button className=' btn btn-success' onClick={goToGeneral} >Save And Continue</button>
            </div>}

            {/* General Section */}

            {isGeneral && <div>
                <div className='text-center'>
                    <h2>Next , Some general work authorization information</h2>
                </div>

                <div className='d-flex-column'>
                    <div className='text-center text mt-5 mb-3'>
                        <h3>Are You authorized to work in the US</h3>
                    </div>
                    <div className="form-floating w-25 mx-3 d-flex mx-auto ">
                        <select className="form-select " id="floatingSelectGrid" value={Auth} aria-label="Floating label select example" onChange={handleAuthChange}>
                            <option></option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                        <label for="floatingSelectGrid">CHOOSE</label>
                    </div>
                </div>

                <div className='d-flex-column'>
                    <div className='text-center text mt-5 mb-3'>
                        <h3>Will you now or in future require sponsorship for empolyment visa staus</h3>
                    </div>
                    <div className="form-floating w-25 mx-3 d-flex mx-auto ">
                        <select className="form-select " id="floatingSelectGrid" value={Visa} aria-label="Floating label select example" onChange={handleVisaChange}>
                            <option></option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                        <label for="floatingSelectGrid">CHOOSE</label>
                    </div>
                </div>

                <div className='d-flex justify-content-around my-3'>
                    <button className='btn btn-secondary' onClick={goBackToWork}>Previous</button>
                    <button className=' btn btn-success' onClick={goToGeneral2} >Save And Continue</button>
                </div>
            </div>}


            {isGeneral2 &&
                <div>
                    <div className='text-center '>
                        <h2>What is your ethnicity
                        </h2></div>
                    <div className="form-floating w-50 mx-3 d-flex mx-auto">
                        <select className="form-select" id="floatingSelectGrid" value={ethnicity} aria-label="Floating label select example" onChange={handleEthnicityChange}>
                            <option></option>
                            <option value="Black/African American">Black/African American</option>
                            <option value="East Asian">East Asian</option>
                            <option value="Hispanic / Latinx">Hispanic / Latinx</option>
                            <option value="Middle Eastern">Middle Eastern</option>
                            <option value="South East Asian">South East Asian</option>
                            <option value="South Asian">South Asian</option>
                            <option value="Native Hawaiian / Pacific Islander">Native Hawaiian / Pacific Islander</option>
                            <option value="Native American / Alaskan">Native American / Alaskan</option>
                        </select>
                        <label for="floatingSelectGrid">Ethnicity</label>
                    </div>

                    <div className='d-flex justify-content-around my-5 mx-5'>
                        <div>
                            <h2>Do You Have Disability</h2>
                            <div className="form-floating w-50 mx-3 d-flex mx-auto">
                                <select className="form-select" id="floatingSelectGrid" value={disable} aria-label="Floating label select example" onChange={handleDisabilityChange}>
                                    <option></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <label>Disability</label>
                            </div>
                        </div>
                        <div>
                            <h2>Are You Veteran</h2>
                            <div className="form-floating w-50 mx-3 d-flex mx-auto">
                                <select className="form-select" id="floatingSelectGrid" value={veteran} aria-label="Floating label select example" onChange={handleVeterenChange}>
                                    <option></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <label>Veteran</label>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-around my-5 mx-5'>
                        <div>
                            <h2>Do You Identify as LGBTQ+</h2>
                            <div className="form-floating w-50 mx-3 d-flex mx-auto">
                                <select className="form-select" id="floatingSelectGrid" value={lgbt} aria-label="Floating label select example" onChange={handleLgbtqChange}>
                                    <option></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <label>LGBTQ+</label>
                            </div>
                        </div>
                        <div>
                            <h2>What is your gender</h2>
                            <div className="form-floating w-50 mx-3 d-flex mx-auto">
                                <select className="form-select" id="floatingSelectGrid" value={gender} aria-label="Floating label select example" onChange={handleGenderChange}>
                                    <option></option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Non-Binary">Non-Binary</option>
                                </select>
                                <label>Gender</label>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-around my-3'>
                        <button className='btn btn-secondary' onClick={goBackToGeneral1}>Previous</button>
                        <button className=' btn btn-success' onClick={goToExtraDetails} >Save And Continue</button>
                    </div>


                </div>

            }

            {
                isExtraDetails &&
                <div>
                    <div className='d-flex justify-content-around my-5'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Linkedin Email"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="email" value={linkedinEmail} onChange={handleLinkedinMail} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput1" label="Linkedin Password" className='mb-3 w-50 mx-3'>
                            <Form.Control type="password" value={linkedinPass} onChange={handleLinkedinPass} />
                        </FloatingLabel>
                    </div><div className='d-flex justify-content-around my-5'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="CareerBuilder Email"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="email" value={carrerBuilderEmail} onChange={handleCbMail} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput2" label="CareerBuilder Password" className='mb-3 w-50 mx-3'>
                            <Form.Control type="password" value={carrerBuilderPass} onChange={handleCbPass} />
                        </FloatingLabel>
                    </div><div className='d-flex justify-content-around my-5'>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="ZipRecruiter Email"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="email" value={ZipRecruiterEmail} onChange={handleZipMail} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput3" label="ZipRecruiter Password" className='mb-3 w-50 mx-3'>
                            <Form.Control type="password" value={ZipRecruiterPass} onChange={handleZipPass} />
                        </FloatingLabel>
                    </div>

                    <div className="form-floating w-50 mx-auto d-flex justify-content-center">

                        <select className="form-select " id="floatingSelectGrid" value={highestEducation} aria-label="Floating label select example" onChange={handleHighestEducation}>
                            <option></option>
                            <option value="Full Time">Tier-1</option>
                        </select>
                        <label for="floatingSelectGrid">Service</label>
                    </div>
                    <div className='d-flex justify-content-around my-3'>
                        <button className='btn btn-secondary' onClick={goBackToGeneral2}>Previous</button>
                        <button className='btn btn-success' onClick={goTotier}>Save And Continue</button>
                    </div>
                </div>
            }


            {showResume &&
                <PdfJSX />
            }

            {final &&
                <div className='text-center'>
                    <h1 className='text-info fs-1'>Your Registration is complete.</h1>
                    <h1 className='text-info'>Job Applications will be sent out starting tomorrow</h1>
                </div>
            }




        </>
    )
}

export default NameDetails
