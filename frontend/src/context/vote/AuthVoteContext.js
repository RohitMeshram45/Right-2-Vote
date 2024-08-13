import axios from "axios";
import { createContext, useCallback, useState } from "react";


// Create the context
export const AuthVoteContext = createContext();


export const AuthVoteProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [login, setLogin] = useState(false);

    const candidate = [];
    const [candidates, SetCandidates] = useState(candidate);

    const vote = [];
    const user = [];
    const admin = [];

    const host = `https://voting-rohit.onrender.com`;

    const userLogin = async ({ aadharnumber, password }) => {
        const loginUrl = `${host}/user/login`;
        // console.log("response checking on")

        const response = await axios.post(loginUrl, { aadharnumber, password });
        // console.log("response -: ", response.user)

        SetUsers(response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);

        return response.data;
    };



    const logOut = async () => {
        setLogin(false)
        localStorage.clear('token'); // Clear LocalStorage
    }


    const userSignUp = async ({ name, age, email, phone, address, aadharnumber, password, role }) => {

        try {
            const signupUrl = `${host}/user/signup`

            const response = await axios.post(signupUrl, {
                name, age, email, phone, address, aadharnumber, password, role
            })

            const token = JSON.stringify(response.data.token);
            // console.log("object otken tnemkkfndkn -- ", token)
            localStorage.setItem("token", token);
            // setToken(response.data.token)        // store token 

            return response.data;
        } catch (error) {
            console.log(error)
        }
    }


    // Method to update Candidate (Hold more some time now )
    const updateCandidate = async ({ id, name, party, age, }) => {
        const candidateUrl = `${host}/candidate/${id}`;
        const token = localStorage.getItem("token");
        // console.log("token----> ", token)
        // console.log("Candidate uerl for Update --> ",candidateUrl)

        try {
            const response = await axios.put(candidateUrl, {
                id, name, party, age,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            const result = response.data;
            if (result.sucess === true) {
                alert("Successfully Update");
            } else {
                alert("Sothing went wrong in Update Candidate");
            }
        } catch (error) {
            alert("something went wrong in internal server");
        }
    }

    const updatePassword = async ({ aadharnumber, currentPassword, newPassword }) => {
        const profileUrl = `${host}/user/profile/forget`;
        const token = localStorage.getItem("token");
        // console.log("token----> ", token)
        try {

            const response = await axios.put(profileUrl, {
                aadharnumber, currentPassword, newPassword
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            console.log("response of user update --->", response.data)
            SetUsers(response.data);
            const result = response.data;
            if (result.sucess === true) {
                alert("Successfully Password Changed");
            } else {
                alert("Sothing went wrong");
            }
        } catch (error) {
            alert("There is a problem with the backend server");
        }

    }

    const displayUser = useCallback(async (req, res) => {

        const profileUrl = `${host}/user/profile`;
        const token = localStorage.getItem("token");
        try {

            const response = await axios.get(profileUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            const result = response.data;
            // console.log('User profile:', result);
            SetUsers(result);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    }, [token])


    // Admin Login

    const AdminLogin = async ({ aadharnumber, password }) => {
        const loginUrl = `${host}/candidate/adminLogin`;
        // console.log("response checking on")

        const response = await axios.post(loginUrl, { aadharnumber, password });
        console.log("response -: ", response)

        SetUsers(response.data);
        const token = response.data.token;

        // Set Token into the LocalStorage
        localStorage.setItem("token", token);

        return response.data;
    }

    const getCandidates = async () => {
        try {
            const getUrl = `${host}/candidate`

            const token = localStorage.getItem("token");
            // console.log(token, "Token h kya ")

            const response = await axios.get(getUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            SetCandidates(response.data)
        } catch (error) {
            console.log(error)
            alert("Candidates Not founds")
        }
    }

    const createCandidate = async ({ name, party, image, age }) => {
        const createUrl = `${host}/candidate/addCandidate`;

        const token = localStorage.getItem("token");
        try {

            const response = await axios.post(createUrl, { name, party, image, age }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            alert("Candidate Add Successfully !")
            SetCandidates(response.data)
            return response;
        } catch (error) {
            console.error("Error fetching profile:", error);
        }

    }

    const deleteCandidate = async (candidateId) => {
        try {
            const deletUrl = `${host}/candidate/${candidateId}`;
            const token = localStorage.getItem('token')
            const response = await axios.delete(deletUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })
        } catch (error) {
            alert("Something went wrong to Delete Candidate")
        }
    }


    const DetailsCandidates = async (adminId) => {
        try {
            const candidateUrl = `${host}/candidate/${adminId}`;
            const token = localStorage.getItem('token')
            console.log("Admin token --> ", token)
            const response = await axios.get(candidateUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })

            console.log("Admin Details response --> ", response);
            return response.data;
        } catch (error) {
            alert("Something went wrong to Get Admin Details")
        }
    }


    const Contact = async (req, res) => {
        try {

            const { name, email, massege } = req.body;
            const response = await axios.post(`${host}/contact`, { name, email, massege });

            console.log("Contact Data -- ", response);

            res.status(200).json({ sucess: true, massege: "Contact Saved Succefully" });
        } catch (error) {
            console.log(error);
        }
    }

    //    endpoint for voting

    const voting = async (candidateID) => {
        try {
            console.log("Candidate id mil rahi h.........")
            const votingUrl = `${host}/candidate/vote/${candidateID}`
            const token = localStorage.getItem('token');
            console.log(token, " voting token------")

            const response = await axios.post(votingUrl, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-type": "application/json",
                }
            }
            );

            if (response.data.isVoted == true) {
                alert(response.data.message, "-------------Rohit 1")
            }

            console.log(response, "------response")
            alert(response.data.message)
            setIsLogin(true)
            return response.data;
        } catch (error) {
            setIsLogin(false)
            alert("Login Please")
            console.error('Request failed:', error);
            if (error.response) {
                console.error('Status code:', error.response.status);
                console.error('Data:', error.response.data);
            }
        }
    }

    const getCount = async () => {
        const countUrl = `${host}/candidate/vote/count`;

        const response = await axios.get(countUrl, {
            headers: {
                "Content-type": "application/json",
            }
        })
        console.log("vote Count -> ", response)
        setVotes(response.data);
    }

    const [votes, setVotes] = useState(vote);
    const [Users, SetUsers] = useState(user);
    const [UsersAdmin, SetUsersAdmin] = useState(user);
    const [admins, SetAdmins] = useState(admin);

    const [isLogin, setIsLogin] = useState(false);


    return (
        <AuthVoteContext.Provider
            value={
                {
                    userLogin, displayUser, token, Users, userSignUp, updatePassword, logOut, createCandidate, getCandidates, candidates
                    , AdminLogin, setLogin, login, deleteCandidate, Contact, DetailsCandidates, voting, getCount, votes, isLogin, setIsLogin
                    , updateCandidate
                }}
        >
            {children}
        </AuthVoteContext.Provider>
    );

}
