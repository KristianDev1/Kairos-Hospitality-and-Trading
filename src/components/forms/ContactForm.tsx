import { Component, createSignal } from "solid-js";

const ContactForm: Component = () => {
    const [formData, setFormData] = createSignal({
        name: '',
        surname: '',
        email: '',
        cellphone: '',
        subject: '',
        message: ''
    });
    const [formDataError, setFormDataError] = createSignal({
        name: '',
        surname: '',
        email: '',
        cellphone: '',
        subject: '',
        message: ''
    });

    const handleFormChange = (e: any) => {
        const { name, value }  = e.currentTarget;
        setFormData((prv) => ({...prv,[name]:value}));
    }

    const handleFormChangeError = (e: any) => {
        const {name} = e.currentTarget;
        setFormData((prv) => ({...prv,[name]:''}));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <form 
            onSubmit={handleSubmit}
            class="w-full"
        >
            <div class="w-full flex gap-4">
                <div class="w-1/2">
                    <p class="text-lg py-2 pl-1 text-gray-500 font-thin">
                        Name
                    </p>
                    <input 
                        type="text"
                        name="name"
                        placeholder={formDataError().name ? formDataError().name : 'Name'}
                        value={formData().name ? formData().name : ''}
                        onChange={handleFormChange}
                        class={`${formDataError().name ? 'bg-red-50 placeholder:text-red-500 border-red-400' : '' } w-full border h-10 rounded px-2 outline-none`}
                    />
                </div>
                <div class="w-1/2">
                    <p class="text-lg py-2 pl-1 text-gray-500 font-thin">
                        Surname
                    </p>
                    <input 
                        type="text"
                        name="name"
                        placeholder={formDataError().surname ? formDataError().surname : 'Surname'}
                        value={formData().surname ? formData().surname : ''}
                        onChange={handleFormChange}
                        class={`${formDataError().surname ? 'bg-red-50 placeholder:text-red-500 border-red-400' : '' } w-full border h-10 rounded px-2 outline-none`}
                    />
                </div>
            </div>
            <div class="w-full flex gap-4">
                <div class="w-1/2">
                    <p class="text-lg py-2 pl-1 text-gray-500 font-thin">
                        Email
                    </p>
                    <input 
                        type="text"
                        name="name"
                        placeholder={formDataError().email ? formDataError().email : 'Email'}
                        value={formData().email ? formData().email : ''}
                        onChange={handleFormChange}
                        class={`${formDataError().email ? 'bg-red-50 placeholder:text-red-500 border-red-400' : '' } w-full border h-10 rounded px-2 outline-none`}
                    />
                </div>
                <div class="w-1/2">
                    <p class="text-lg py-2 pl-1 text-gray-500 font-thin">
                        Cellphone
                    </p>
                    <input 
                        type="text"
                        name="name"
                        placeholder={formDataError().cellphone ? formDataError().cellphone : 'Cellphone'}
                        value={formData().cellphone ? formData().cellphone : ''}
                        onChange={handleFormChange}
                        class={`${formDataError().cellphone ? 'bg-red-50 placeholder:text-red-500 border-red-400' : '' } w-full border h-10 rounded px-2 outline-none`}
                    />
                </div>
            </div>
            <div class="w-full">
                <p class="text-lg py-2 pl-1 text-gray-500 font-thin">
                    Subject
                </p>
                <select
                    name="subject"
                    onChange={handleFormChange}
                    class={`${formDataError().subject ? 'bg-red-50 text-red-500 border-red-400' : 'text-gray-500' } w-full border h-10 rounded px-1 outline-none`}
                >
                    <option value="">Select</option>
                    <option value="">Select</option>
                    <option value="">Select</option>
                </select>
            </div>
            <div class="w-full">
                <p class="text-lg py-2 pl-1 text-gray-500 font-thin">
                    Message
                </p>
                <textarea 
                    name="message"
                    placeholder={formDataError().message ? formDataError().message : 'Enter message here'}
                    value={formData().message ? formData().message : ''}
                    class={`${formDataError().subject ? 'bg-red-50 placeholder:text-red-500 border-red-400' : '' } w-full border h-36 rounded p-2 outline-none resize-none`}
                />
            </div>
            <button class="w-full h-10 rounded-sm bg-black duration-500 ease-in-out mt-5 text-white text-lg">
                Submit
            </button>
        </form>
    )
}

export default ContactForm;