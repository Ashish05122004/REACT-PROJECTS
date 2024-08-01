import React from 'react'
import Input from './Input'
import CheckBox from './CheckBox'

const Form = ({ changeHandler, formData, submitHandler }) => {
    return (
        <div className='flex flex-col border-2 w-6/12 bg-white'>
            <form onSubmit={submitHandler} className='mt-8'>
                <Input
                    title="First Name:"
                    id="id1"
                    type="text"
                    name="firstName"
                    placeholder="Ashish"
                    value={formData.firstName}
                    changeHandler={changeHandler}>
                </Input>
                <Input
                    title="Last Name:" id="id2" type="text" name="lastName" placeholder="Pradhan" value={formData.lastName} changeHandler={changeHandler}>
                </Input>
                <Input
                    title="Email Address:" id="id3" type="email" name="email" placeholder="ashishpradhan130@gmail.com" value={formData.email} changeHandler={changeHandler}>
                </Input>
                <div className='ml-8'>
                    <label htmlFor="id4">Country :</label> <br />
                    <select
                        name="country"
                        id="id4"
                        onChange={changeHandler}
                        value={formData.country}
                        className='border-2 w-11/12 rounded-md'
                    >
                        <option value="INDIA">INDIA</option>
                        <option value="RUSSIA">RUSSIA</option>
                        <option value="UK">UK</option>
                        <option value="JAPAN">JAPAN</option>
                    </select>
                </div>
                <Input
                    title="Street Address:" id="id5" type="text" name="address" placeholder="Damodorpur" value={formData.address} changeHandler={changeHandler}>
                </Input>
                <Input
                    title="City:" id="id6" type="text" name="city" placeholder="Balasore" value={formData.city} changeHandler={changeHandler}>
                </Input>
                <Input
                    title="state/province:" id="id7" type="text" name="state" placeholder="Odisha" value={formData.state} changeHandler={changeHandler}>
                </Input>
                <Input
                    title="ZIP/Postal code:" id="id8" type="text" name="zip" placeholder="756001" value={formData.zip} changeHandler={changeHandler}>
                </Input>

                <div className='ml-8'>
                    <p className=' font-semibold mb-4'>By mail:</p>
                    <CheckBox
                        title="Comments"
                        description="Get notified when someone posts a comment on a posting"
                        id="id9"
                        name='isComment'
                        changeHandler={changeHandler}
                        checked={formData.isComment}
                    >
                    </CheckBox>
                    <CheckBox
                        title="Candidate"
                        description="Get notified when a candidate applied a job"
                        id="id10"
                        name="candidate"
                        changeHandler={changeHandler}
                        checked={formData.candidate}
                    >
                    </CheckBox>
                    <CheckBox
                        title="Offer"
                        description="Get notified when a candidate accept or reject a offer"
                        id="id11"
                        name="offer"
                        changeHandler={changeHandler}
                        checked={formData.offer}
                    >
                    </CheckBox>
                </div>

                <div className='ml-8 mt-3'>
                    <label className=''>
                        <p className='font-semibold'>Push Notification</p>
                        <p>These are delivered by SMS to your mobile phone</p>
                    </label>
                    <div className='mt-3'>
                        <input
                            type="radio"
                            name="pushNotification"
                            id="i1"
                            value="Everything"
                            onChange={changeHandler}
                            className='mr-3'
                            checked={formData.pushNotification === "Everything"}
                        />
                        <label htmlFor="i1">Everything</label><br />
                        <input
                            type="radio"
                            name="pushNotification"
                            id="i2"
                            value="Same as mail"
                            onChange={changeHandler}
                            className='mr-3'
                            checked={formData.pushNotification === "Same as mail"}
                        />
                        <label htmlFor="i2">Same as mail</label><br />
                        <input
                            type="radio"
                            name="pushNotification"
                            id="i3"
                            value="No push notification"
                            onChange={changeHandler}
                            className='mr-3'
                            checked={formData.pushNotification === "No push notification"}
                        />
                        <label htmlFor="i3">No push notification</label>
                    </div>
                </div>

                <button className=' bg-blue-500 text-white px-[1.2rem] py-[0.5rem] rounded-md ml-8 mt-2'>SAVE</button>

            </form>
        </div>
    )
}

export default Form
