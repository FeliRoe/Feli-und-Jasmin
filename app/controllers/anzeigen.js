import { create, findAll, findByPk, update, destroy } from '../models/anzeigen';


export async function AnzeigeErstellen(req, res, next) {
  try {
    const ANZEIGE= {
      createdOn : req.body.createdOn,
      createdBy : req.body.createdBy,
      softwareVersion: req.body.softwarVersion,
      customer: req.body.customer,
      type: req.body.entry.type,
      address: req.body.entry.address,
      postal: req.body.entry.postal,
      city: req.body.entry.city,
      size: req.body.entry.size,
      comment: req.body.entry.comment,
      shortHand: req.body.entry.shortHand,
    };

    try {
      const anzeige = await create(ANZEIGE);
      console.log('Inserat crerated');
      return res.status(201).json(anzeige);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}


export async function getAlleAnzeigen(req, res, next) {
  try {
    const address = req.query.address;
    const condition = address ? { address: { [Op.iLike]: `%${address}%` } } : null;
    const alle = await Inserate.findAll({ where: condition });
    return res.status(200).json(alle);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function gettypehouse(req, res, next) {
  try { const anzeige = await findAll({ where: { type: 'house'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function gettypeconstructionsite(req, res, next) {
  try { const anzeige = await findAll({ where: { type: 'construction-site'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function gettypeapartment(req, res, next) {
  try { const anzeige = await findAll({ where: { type: 'apartment'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
}


export async function getidfilter(req, res, next) {
  try {
    const anzeige = await findByPk(req.params.id);
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function updateAnzeige(req, res, next) {
  try {
    const ANZEIGE = {
      createdOn : req.body.createdOn,
      createdBy : req.body.createdBy,
      softwareVersion: req.body.softwarVersion,
      customer: req.body.customer,
      type: req.body.entry.type,
      address: req.body.entry.address,
      postal: req.body.entry.postal,
      city: req.body.entry.city,
      size: req.body.entry.size,
      comment: req.body.entry.comment,
      shortHand: req.body.entry.shortHand,
    };

    try {
      const anzeige = await update(ANZEIGE, { where: { id: req.params.id } });
      return res.status(200).json(anzeige);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function deleteAnzeige(req, res, next) {
  try {
    const user = await destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}
