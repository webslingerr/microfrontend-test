function pageToOffset(pageNumber = 1, limit = 10) {
	return (pageNumber - 1) * limit;
}

export default pageToOffset;
