import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Countries from '../utils';
import "../formInput.styles.scss";
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
    const [htmlData , setHtmlData]= useState("");


    const [isBasic, setIsBasic] = useState(true);
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


    const [isExtraDetails, setIsExtraDetails] = useState(false);
    const [linkedinEmail, setLinkedinEmail] = useState("");
    const [carrerBuilderEmail, setCarrerBuilderEmail] = useState("");
    const [ZipRecruiterEmail, setZipRecruiterEmail] = useState("");
    const [linkedinPass, setLinkedinPass] = useState("");
    const [carrerBuilderPass, setCarrerBuilderPass] = useState("");
    const [ZipRecruiterPass, setZipRecruiterPass] = useState("");


    const PdfJSX = () => {
        return (
            <>
                <h1>{firstName}</h1>
                <h2>Hello React</h2>
            </>
        )
    }

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

    const writeToDatabase = () => {

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
                linkedinEmail: linkedinEmail,
                linkedinPass: linkedinPass,
                carrerBuilderEmail: carrerBuilderEmail,
                carrerBuilderPass: carrerBuilderPass,
                ZipRecruiterEmail: ZipRecruiterEmail,
                ZipRecruiterPass: ZipRecruiterPass,
                htmlData : htmlData,
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
                uidd: id,
            })
        }
        setIsExtraDetails(false);
        setShowResume(true);
        const printElement = ReactDOMServer.renderToString(PdfJSX());

        setHtmlData(printElement)
        console.log(htmlData)
        // navigate("/resume")

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
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="text" value={firstName} onChange={handleFirstName} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" value={lastName} onChange={handleLastName} />
                        </FloatingLabel>

                        <div className="form-floating w-50 mx-3 ">
                            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" onChange={handleCountrySelect}>
                                <option>{Country}</option>
                                {Countries.map((country, index) => {
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

                        <FloatingLabel controlId="floatingInput" label="Job listing that you are searching for" className='mb-3 w-50 mx-3'>
                            <Form.Control type="text" value={job} onChange={handleJob} />
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
                            label="CarrerBuilder Email"
                            className="mb-3 w-50 mx-3"
                        >
                            <Form.Control type="email" value={carrerBuilderEmail} onChange={handleCbMail} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput2" label="CarrerBuilder Password" className='mb-3 w-50 mx-3'>
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
                    <div className='d-flex justify-content-around my-3'>
                        <button className='btn btn-secondary' onClick={goBackToGeneral2}>Previous</button>
                        <button className='btn btn-success' onClick={writeToDatabase}>Submit</button>
                    </div>
                </div>
            }

            {showResume &&
                <PdfJSX />}

        </>
    )
}

export default NameDetails
