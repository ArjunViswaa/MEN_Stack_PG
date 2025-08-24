// @desc Get all contacts
// @route GET /api/contacts
// @access Public
const getContacts = (req, res) => {
    res.status(200).json({message: 'Get all contacts'});
};

// @desc Get a single contact by ID
// @route GET /api/contacts/:id
// @access Public
const getContactById = (req, res) => {
    res.status(200).json({message: 'Get a contact : ' + req.params.id});
};

// @desc Create a new contact
// @route POST /api/contacts
// @access Public
const createContact = (req, res) => {
    res.status(201).json({message: 'Create a new contact'});
};


// @desc Update a contact by ID
// @route PUT /api/contacts/:id
// @access Public
const updateContact = (req, res) => {
    res.status(200).json({message: 'Update a contact : ' + req.params.id});
};

// @desc Delete a contact by ID
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = (req, res) => {
    res.status(200).json({message: 'Delete a contact : ' + req.params.id});
};

module.exports = {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
};