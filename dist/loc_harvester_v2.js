function (context, b) {
    let c, d, e = b => a.t.call(b || {}),
        f = [],
        g = "",
        h = ["3rd_3y3_grill", "amelie", "bassy_thecount", "be_lavar", "bella_swan", "bobranator", "boris", "c_vader", "catness", "chad_bose", "cking", "corg_train", "corgitruthsayer", "d4ria", "daa_freak", "daurmith", "delete_me_first", "diamond_dogz", "doc_brown", "firebreathingdragon", "frantimike", "free_man_morg", "geyser_sore", "h4chguy", "hermione", "ice_ventura", "indie_jones", "inigo", "jack_sparrow", "jamesb", "jermaine", "juno_macguff", "leon", "luke_5kywalker", "m_clarke_dunk", "m_poppins", "madthugpug", "mjay_m_walker", "oz", "poitier_27", "pugluv4vr", "rocky_b", "runningman23", "sammy_l_jack", "shareef_j", "shawn_aa", "sportsfan2031", "terrance_cruz", "thedude", "thegreat", "thepowerful", "troy_cole", "universe", "whois_hermano", "wiley_curry", "will_de_vaughn", "wonderous_steve", "youngtwokay"];
    for (let j = 0; j < h.length; j++) {
        if (d = e({
                username: h[j]
            }), /.ot|n.t|no./.test(d)) continue;
        let [, b] = /`N([a-z0-9_]+)`/m.exec(d) || [];
        #D({
            t: a.t,
            a: {
                username: h[j],
                [g]: "order_qrs"
            }
        })
        g = g || b, c = #fs.dtr.qr({
            t: a.t,
            a: {
                username: h[j],
                [g]: "order_qrs"
            }
        }), c.forEach(z => {
            d = e({
                username: h[j],
                [b]: "cust_service",
                order_id: z.id
            }).split(":")[1], d && (d = d.split("\n")[0].split(" ").slice(1), f = f.concat(d))
        })
    }
    return f.filter(z => !/[^a-z0-9_\.]/.test(z)).sort()
}