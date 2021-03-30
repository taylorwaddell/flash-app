export default function areYouSure (item) {
    return window.confirm(`Delete this ${item}?\n \nYou won't be able to recover it.`);
}