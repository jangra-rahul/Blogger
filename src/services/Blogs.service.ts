import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_APP_API_URL;
const GET_CURRENT_USER = `${baseUrl}/web/getWebBlogs`;
const GET_BLOG_DETAIL = `${baseUrl}/web/getWebBlogDetails`;
const GLOBAL_SEARCH = `${baseUrl}/web/globalSearch`;
const CREATE_COMMENT = `${baseUrl}/web/createComment`;
const GET_BLOG_COMMENTS = `${baseUrl}/web/getBlogComments`;

export const getWebBlogs = () => {
  return axios.get(GET_CURRENT_USER);
};
export const getBlogDetailBySlug = (slug: string) => {
  return axios.get(`${GET_BLOG_DETAIL}?blogId=${slug}`);
};

// export const searchGlobal = (query: string, sort?: string) => {
//   return axios.get(`${GLOBAL_SEARCH}?search=${query}`);
// };
export const searchGlobal = (query: string, sort?: string) => {
  let url = `${GLOBAL_SEARCH}?search=${encodeURIComponent(query)}`;
  if (sort) {
    url += `&sort=${encodeURIComponent(sort)}`;
  }
  return axios.get(url);
};

export const getBlogComments = (blogId: string) => {
  return axios.get(`${GET_BLOG_COMMENTS}?blogId=${blogId}`);
};

export const postBlogComment = (payload: {
  blogId: string;
  name: string;
  email: string;
  comment: string;
}) => {
  return axios.post(CREATE_COMMENT, payload);
};

export async function fetchBlogs() {
  try {
    const res: any = await getWebBlogs();
    console.log("Fetched Blog Data:", res?.data);
    return res?.data || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export async function fetchBlogDetail(slug: string) {
  try {
    console.log("Fetching blog detail for slug:", slug);
    const res = await getBlogDetailBySlug(slug);
    console.log("Fetched Blog Detail:", res?.data);
    return res?.data || null;
  } catch (error: any) {
    if (error.response) {
      // Server responded with a status outside 2xx
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error("No response received:", error.request);
    } else {
      // Something else happened
      console.error("Error message:", error.message);
    }
    return null;
  }
}

export async function fetchGlobalSearchResults(query: string, sort?: string) {
  try {
    console.log("Searching globally for:", query, "with sort:", sort);
    const res = await searchGlobal(query, sort);
    console.log("Search Results:", res?.data);
    return res?.data || null;
  } catch (error: any) {
    console.error("Global search error:", error);
    return null;
  }
}
export async function submitBlogComment(payload: {
  blogId: string;
  name: string;
  email: string;
  comment: string;
}) {
  try {
    const res = await postBlogComment(payload);
    console.log("Comment posted:", res?.data);
    return res?.data || null;
  } catch (error: any) {
    console.error("Comment post error:", error.response?.data || error.message);
    return null;
  }
}

export async function fetchBlogComments(blogId: string) {
  try {
    const res = await getBlogComments(blogId);
    return res?.data || null;
  } catch (error) {
    console.error("Error fetching blog comments:", error);
    return null;
  }
}
