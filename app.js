
(()=>{
    const $ = id => document.getElementById(id);

    const cityData = {
        "new york": "America/New_York",
        "new york city": "America/New_York",
        "buffalo": "America/New_York",
        "rochester": "America/New_York",
        "albany": "America/New_York",
        "vinton": "America/New_York",
        "syracuse": "America/New_York",
        "washington dc": "America/New_York",
        "washington d.c.": "America/New_York",
        "rockville": "America/New_York",
        "bethesda": "America/New_York",
        "baltimore": "America/New_York",
        "annapolis": "America/New_York",
        "philadelphia": "America/New_York",
        "pittsburgh": "America/New_York",
        "boston": "America/New_York",
        "providence": "America/New_York",
        "hartford": "America/New_York",
        "new haven": "America/New_York",
        "blacksburg": "America/New_York",
        "richmond": "America/New_York",
        "virginia beach": "America/New_York",
        "norfolk": "America/New_York",
        "roanoke": "America/New_York",
        "alexandria": "America/New_York",
        "charlotte": "America/New_York",
        "raleigh": "America/New_York",
        "durham": "America/New_York",
        "asheville": "America/New_York",
        "atlanta": "America/New_York",
        "savannah": "America/New_York",
        "miami": "America/New_York",
        "orlando": "America/New_York",
        "tampa": "America/New_York",
        "jacksonville": "America/New_York",
        "fort lauderdale": "America/New_York",
        "detroit": "America/Detroit",
        "grand rapids": "America/Detroit",
        "indianapolis": "America/Indiana/Indianapolis",
        "fort wayne": "America/Indiana/Indianapolis",
        "louisville": "America/Kentucky/Louisville",
        "chicago": "America/Chicago",
        "milwaukee": "America/Chicago",
        "madison": "America/Chicago",
        "minneapolis": "America/Chicago",
        "saint paul": "America/Chicago",
        "des moines": "America/Chicago",
        "st louis": "America/Chicago",
        "saint louis": "America/Chicago",
        "kansas city": "America/Chicago",
        "little rock": "America/Chicago",
        "memphis": "America/Chicago",
        "nashville": "America/Chicago",
        "new orleans": "America/Chicago",
        "baton rouge": "America/Chicago",
        "shreveport": "America/Chicago",
        "dallas": "America/Chicago",
        "fort worth": "America/Chicago",
        "austin": "America/Chicago",
        "cedar park": "America/Chicago",
        "liberty hill": "America/Chicago",
        "houston": "America/Chicago",
        "san antonio": "America/Chicago",
        "round rock": "America/Chicago",
        "pflugerville": "America/Chicago",
        "georgetown tx": "America/Chicago",
        "irving": "America/Chicago",
        "plano": "America/Chicago",
        "frisco": "America/Chicago",
        "arlington tx": "America/Chicago",
        "waco": "America/Chicago",
        "corpus christi": "America/Chicago",
        "lubbock": "America/Chicago",
        "amarillo": "America/Chicago",
        "el paso": "America/Denver",
        "denver": "America/Denver",
        "arvada": "America/Denver",
        "great falls": "America/Denver",
        "boulder": "America/Denver",
        "fort collins": "America/Denver",
        "colorado springs": "America/Denver",
        "phoenix": "America/Phoenix",
        "tucson": "America/Phoenix",
        "mesa": "America/Phoenix",
        "scottsdale": "America/Phoenix",
        "flagstaff": "America/Phoenix",
        "salt lake city": "America/Denver",
        "provo": "America/Denver",
        "albuquerque": "America/Denver",
        "santa fe": "America/Denver",
        "cheyenne": "America/Denver",
        "billings": "America/Denver",
        "las vegas": "America/Los_Angeles",
        "reno": "America/Los_Angeles",
        "los angeles": "America/Los_Angeles",
        "san diego": "America/Los_Angeles",
        "san francisco": "America/Los_Angeles",
        "san jose": "America/Los_Angeles",
        "sacramento": "America/Los_Angeles",
        "fresno": "America/Los_Angeles",
        "oakland": "America/Los_Angeles",
        "seattle": "America/Los_Angeles",
        "tacoma": "America/Los_Angeles",
        "spokane": "America/Los_Angeles",
        "portland": "America/Los_Angeles",
        "eugene": "America/Los_Angeles",
        "salem": "America/Los_Angeles",
        "anchorage": "America/Anchorage",
        "fairbanks": "America/Anchorage",
        "honolulu": "Pacific/Honolulu",
        "london": "Europe/London",
        "berlin": "Europe/Berlin",
        "paris": "Europe/Paris",
        "toronto": "America/Toronto",
        "vancouver": "America/Vancouver",
        "montreal": "America/Toronto",
        "kathmandu": "Asia/Kathmandu",
        "nepal": "Asia/Kathmandu",
        "delhi": "Asia/Kolkata",
        "mumbai": "Asia/Kolkata",
        "tokyo": "Asia/Tokyo",
        "dubai": "Asia/Dubai",
        "sydney": "Australia/Sydney"
    };

    const states = {
        AL: "America/Chicago",
        AK: "America/Anchorage",
        AZ: "America/Phoenix",
        AR: "America/Chicago",
        CA: "America/Los_Angeles",
        CO: "America/Denver",
        CT: "America/New_York",
        DE: "America/New_York",
        FL: "America/New_York",
        GA: "America/New_York",
        HI: "Pacific/Honolulu",
        ID: "America/Boise",
        IL: "America/Chicago",
        IN: "America/Indiana/Indianapolis",
        IA: "America/Chicago",
        KS: "America/Chicago",
        KY: "America/New_York",
        LA: "America/Chicago",
        ME: "America/New_York",
        MD: "America/New_York",
        MA: "America/New_York",
        MI: "America/Detroit",
        MN: "America/Chicago",
        MS: "America/Chicago",
        MO: "America/Chicago",
        MT: "America/Denver",
        NE: "America/Chicago",
        NV: "America/Los_Angeles",
        NH: "America/New_York",
        NJ: "America/New_York",
        NM: "America/Denver",
        NY: "America/New_York",
        NC: "America/New_York",
        ND: "America/Chicago",
        OH: "America/New_York",
        OK: "America/Chicago",
        OR: "America/Los_Angeles",
        PA: "America/New_York",
        RI: "America/New_York",
        SC: "America/New_York",
        SD: "America/Chicago",
        TN: "America/Chicago",
        TX: "America/Chicago",
        UT: "America/Denver",
        VT: "America/New_York",
        VA: "America/New_York",
        WA: "America/Los_Angeles",
        WV: "America/New_York",
        WI: "America/Chicago",
        WY: "America/Denver",
        DC: "America/New_York"
    };

    const stateNames = {
        alabama: "AL",
        alaska: "AK",
        arizona: "AZ",
        arkansas: "AR",
        california: "CA",
        colorado: "CO",
        connecticut: "CT",
        delaware: "DE",
        florida: "FL",
        georgia: "GA",
        hawaii: "HI",
        idaho: "ID",
        illinois: "IL",
        indiana: "IN",
        iowa: "IA",
        kansas: "KS",
        kentucky: "KY",
        louisiana: "LA",
        maine: "ME",
        maryland: "MD",
        massachusetts: "MA",
        michigan: "MI",
        minnesota: "MN",
        mississippi: "MS",
        missouri: "MO",
        montana: "MT",
        nebraska: "NE",
        nevada: "NV",
        "new hampshire": "NH",
        "new jersey": "NJ",
        "new mexico": "NM",
        "new york": "NY",
        "north carolina": "NC",
        "north dakota": "ND",
        ohio: "OH",
        oklahoma: "OK",
        oregon: "OR",
        pennsylvania: "PA",
        "rhode island": "RI",
        "south carolina": "SC",
        "south dakota": "SD",
        tennessee: "TN",
        texas: "TX",
        utah: "UT",
        vermont: "VT",
        virginia: "VA",
        washington: "WA",
        "west virginia": "WV",
        wisconsin: "WI",
        wyoming: "WY",
        "district of columbia": "DC"
    };

    // Recently searched locations
    const initial = [
        ["Tikka – 4221 Connecticut Avenue NW, Washington, DC 20008", "America/New_York"],
        ["Bento & Blaze – 17499 Hamilton Pool Rd, Austin, TX 78738", "America/Chicago"],
        ["Namaste Kitchen – 239 N Main St, Blacksburg, VA 24060", "America/New_York"],
        ["Royal Durbar Kitchen – 1321 Rockville Pike #C, Rockville, MD 20852", "America/New_York"],
        ["Yak & Yeti Arvada – 7803 Ralston Rd, Arvada, CO 80002", "America/Denver"],
        ["House of Desi The Dhaba – 75 Seward Jct Lp, Liberty Hill, TX 78642", "America/Chicago"],
        ["New Yak N Yeti-200 Buttercup Creek Boulevard #125, Cedar Park, TX 78613", "America/Chicago"]
    ].map(x => ({
        name: x[0],
        zone: x[1]
    }));

    const KEY = "local_time_finder_recent_v1";

    let history;
    try {
        history = JSON.parse(localStorage.getItem(KEY)) || initial.slice();
    } catch (e) {
        history = initial.slice();
    }

    let active = null;

    // Location lookup
    function lookup(raw) {
        const n = raw.toLowerCase()
            .replace(/[.,#]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        for (const c of Object.keys(cityData).sort((a, b) => b.length - a.length)) {
            if (n.includes(c)) {
                return {
                    zone: cityData[c],
                    name: raw
                };
            }
        }

        const m = raw.toUpperCase().match(
            /(?:,|\s)\s*([A-Z]{2})(?:\s+\d{5}(?:-\d{4})?)?\s*(?:,|$)/
        );

        if (m && states[m[1]]) {
            return {
                zone: states[m[1]],
                name: raw,
                approx: true
            };
        }

        for (const s of Object.keys(stateNames).sort((a, b) => b.length - a.length)) {
            if (n.includes(s)) {
                return {
                    zone: states[stateNames[s]],
                    name: raw,
                    approx: true
                };
            }
        }

        return null;
    }

    // Update live clock
    function render() {
        if (!active) return;

        const now = new Date();
        const zone = active.zone;

        const f = o => new Intl.DateTimeFormat("en-US", {
            timeZone: zone,
            ...o
        });

        $("clock").textContent = f({
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }).format(now);

        $("date").textContent = f({
            month: "long",
            day: "numeric",
            year: "numeric"
        }).format(now);

        $("day").textContent = f({
            weekday: "long"
        }).format(now);

        $("zone").textContent = f({
            timeZoneName: "long"
        }).formatToParts(now).find(p => p.type === "timeZoneName")?.value || zone;

        $("offset").textContent = zone + " · " + (
            f({
                timeZoneName: "shortOffset"
            }).formatToParts(now).find(p => p.type === "timeZoneName")?.value || ""
        );
    }

    // Display recent searches
    function drawHistory() {
        $("recent").replaceChildren();
        $("empty").hidden = history.length > 0;

        history.slice(0, 20).forEach(item => {
            const b = document.createElement("button");
            b.className = "recent";
            b.textContent = item.name + "  ↗";
            b.onclick = () => show(item, false);

            $("recent").append(b);
        });
    }

    // Show selected location
    function show(item, add = true) {
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: item.zone
            });
        } catch (e) {
            $("error").textContent = "Invalid time zone.";
            return;
        }

        active = item;
        $("place").textContent = item.name;
        $("result").hidden = false;
        $("error").textContent = "";

        if (add) {
            history = [
                item,
                ...history.filter(x => x.name !== item.name)
            ].slice(0, 20);

            try {
                localStorage.setItem(KEY, JSON.stringify(history));
            } catch (e) {}

            drawHistory();
        }

        render();
    }

    // Search location
    function search(value) {
        const raw = (value ?? $("q").value).trim();

        if (!raw) {
            $("error").textContent = "Please enter a location.";
            return;
        }

        const result = lookup(raw);

        if (!result) {
            $("error").textContent =
                "Location not recognized. Try a city and state, e.g. Cedar Park, TX.";
            return;
        }

        if (result.approx) {
            $("error").textContent =
                "Using the state's default time zone. Some states have multiple time zones; enter a city for better accuracy.";
        }

        show(result);
    }

    // Search button and Enter key
    $("go").onclick = () => search();

    $("q").addEventListener("keydown", e => {
        if (e.key === "Enter") search();
    });

    // Clear recent searches
    $("clear").onclick = () => {
        history = [];
        localStorage.removeItem(KEY);
        drawHistory();
    };

    // Copy time details
    $("copy").onclick = async () => {
        if (!active) return;

        const f = o => new Intl.DateTimeFormat("en-US", {
            timeZone: active.zone,
            ...o
        });

        const text = [
            active.name,
            f({
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }).format(new Date()),
            f({
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }).format(new Date()),
            f({
                timeZoneName: "long"
            }).format(new Date()),
            active.zone
        ].join("\n");

        try {
            await navigator.clipboard.writeText(text);
            $("copied").textContent = "Copied to clipboard.";
        } catch (e) {
            $("copied").textContent = text;
        }
    };

    // Popular locations
    [
        "New York, NY",
        "Washington DC",
        "Austin, TX",
        "Cedar Park, TX",
        "Blacksburg, VA",
        "Arvada, CO",
        "Chicago, IL",
        "Los Angeles, CA",
        "Miami, FL",
        "Denver, CO",
        "Seattle, WA",
        "Phoenix, AZ"
    ].forEach(name => {
        const b = document.createElement("button");
        b.className = "recent";
        b.textContent = name;

        b.onclick = () => {
            $("q").value = name;
            search(name);
        };

        $("popular").append(b);
    });

    // Initialize app
    drawHistory();

    if (history.length) {
        show(history[0], false);
    }

    setInterval(render, 1000);
})();
